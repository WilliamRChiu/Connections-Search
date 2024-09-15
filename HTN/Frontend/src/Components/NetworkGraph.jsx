
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const NetworkGraph = () => {
    const svgRef = useRef();
    const tooltipRef = useRef();

    useEffect(() => {
        // Fetch the graph data from the external file
        d3.json('/graphData.json').then((graph) => {
            const svg = d3.select(svgRef.current)
                .attr('width', 1200)
                .attr('height', 800);
            
            const tooltip = d3.select(tooltipRef.current)
                .style('position', 'absolute')
                .style('padding', '10px')
                .style('background', '#333')
                .style('color', '#fff')
                .style('border', '1px solid #777')
                .style('border-radius', '6px')
                .style('pointer-events', 'none')
                .style('opacity', 0)
                .style('box-shadow', '0 4px 6px rgba(0, 0,  0, 0.1)')
                .style('font-family', 'Montserrat')  // Set font family to Montserrat
                .style('font-size', '12px')  // Adjust the font size as needed
                .style('max-width', '200px')
                .style('white-space', 'nowrap');

            const width = 1200;
            const height = 800;

            const simulation = d3.forceSimulation(graph.nodes)
                .force('link', d3.forceLink(graph.links).id(d => d.id).distance(150))  // Reduce link distance
                .force('charge', d3.forceManyBody().strength(-600))  // Increase negative charge to repel nodes more
                .force('center', d3.forceCenter(width / 2, height / 2));  // Nodes gravitate to the center
        

            svg.selectAll('*').remove(); // Clear previous render

            // Draw links
            const link = svg.append('g')
                .attr('class', 'links')
                .selectAll('line')
                .data(graph.links)
                .enter().append('line')
                .attr('class', 'link')
                .attr('stroke', '#999')
                .attr('stroke-opacity', 0.6);

            // Draw nodes
            const node = svg.append('g')
                .attr('class', 'nodes')
                .selectAll('circle')
                .data(graph.nodes)
                .enter().append('circle')
                .attr('r', d => Math.cbrt(d.followers) * 2)  // Scale radius based on followers
                .attr('fill', d => {
                    // Change the color of the node with id 1 to red
                    if (d.id === "0" || d.id === "38") return 'slateblue';  // Node with id 1 is red
                    return 'steelblue';  // Default color for other nodes
                })
                .call(d3.drag()
                    .on('start', dragstarted)
                    .on('drag', dragged)
                    .on('end', dragended))
                .on('mouseover', (event, d) => {
                    tooltip
                        .style('opacity', 1)
                        .html(`
                            <strong>ID:</strong> ${d.id}<br>
                            <strong>Name:</strong> ${d.name || 'N/A'}<br>
                            <strong>Followers:</strong> ${d.followers || 'N/A'}
                        `)
                        .style('left', `${event.pageX + 10}px`)
                        .style('top', `${event.pageY - 28}px`);
                })
                .on('mousemove', (event) => {
                    tooltip
                        .style('left', `${event.pageX + 10}px`)
                        .style('top', `${event.pageY - 28}px`);
                })
                .on('mouseout', () => {
                    tooltip.style('opacity', 0);
                });

            // Add labels to nodes
            const labels = svg.append('g')
                .attr('class', 'labels')
                .selectAll('text')
                .data(graph.nodes)
                .enter().append('text')
                .attr('dy', -15)  // Adjust dy to place the label above the node (negative value moves it up)
                .attr('x', d => d.x)
                .attr('y', d => d.y)
                .attr('text-anchor', 'middle')  // Center the text horizontally
                .attr('fill', 'white')  // Set text color
                .style('font-family', 'Montserrat')  // Set font family to Montserrat
                .style('font-size', '12px')  // Adjust the font size as needed
                .text(d => d.name);  // Display the node's id or any other relevant information

            simulation.on('tick', () => {
                link
                    .attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y);

                node
                    .attr('cx', d => d.x)
                    .attr('cy', d => d.y);

                labels
                    .attr('x', d => d.x)
                    .attr('y', d => d.y - 20);  // Keep the label above the node
            });

            // Dragging functions
            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
        });
    }, []);

    return (
        <>
        <div className='graph-container'>
            <svg ref={svgRef}></svg>
            <div ref={tooltipRef} className="tooltip"></div>
        </div>
        </>
    );
};

export default NetworkGraph;

