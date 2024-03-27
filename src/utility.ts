const JSONParse = <T>(text: string): T => {
  try {
    return JSON.parse(text) as T;
  } catch (error) {
    throw error;
  }
}

interface User {
  username: string
}

JSONParse<User>("dfbfd");