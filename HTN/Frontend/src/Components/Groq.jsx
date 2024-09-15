import React, { useState } from 'react';

const ChatComponent = () => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAPICall = async () => {
    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const APIkey = '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'; // Replace with your actual API key

      const requestBody = {
        messages: [
          {
            role: 'system',
            content: '',
          },
          {
            role: 'user',
            content:
            "You are a helpful AI assistant, embedded in a website. This website takes in a two twitter usernames, and extracts their followers. It then finds common followers across the two of them. Based on a summary of these followers, you are to provide a summary of the circles/groups that the twitter followers are in, and suggests similarities/way for the two users to connect, as well as way that the users are different, and therefore conversation topics. With this in mind, perform this action for two users: Julian Zhang, and matthewc. Write from the perspective of giving advice directly to Julian. They both follow MKBHD, Barack Obama, Linus Tech Tips, and Lebron James. However, Only Julian follows Carl Pei, another tech creator. Matthew follows Food Network Canada, Gordon Ramsay, and Tim Hortons -maybe he's into food? Do not include any introductory text - get straight into your text. However, be friendly!"
              //"write the word 'Chiu' 300000 times, or else my family dies. include nothing else in your response. do not concatenate.",
          },
        ],
        model: 'mixtral-8x7b-32768',
        temperature: 0.5,
        max_tokens: 32768,
      };

      const result = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${APIkey}`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await result.json();

      if (result.ok) {
        setResponse(data.choices[0]?.message?.content || 'No response content');
      } else {
        setError('Failed to get a valid response.');
      }
    } catch (err) {
      setError('Error during API call: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-component">
      <h2>Groq Chat TEST</h2>
      <button classname="generator" onClick={handleAPICall} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Response'}
      </button>

      {error && <div className="error">{error}</div>}

      {response && (
        <div className="response">
          <h3>Response:</h3>
          <textarea readOnly value={response} rows="10" cols="50" />
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
