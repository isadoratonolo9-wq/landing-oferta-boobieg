export async function handler(event, context) {
  try {
    // Pegando o token de ambiente do Netlify
    const token = process.env.FB_TOKEN;

    if (!token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Token não configurado" }),
      };
    }

    // Exemplo de chamada à API do Facebook (Graph API)
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ sucesso: true, dados: data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
