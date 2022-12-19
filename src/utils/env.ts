const variables = [
    'NEXT_APP_URL',
    'API_HOST'
  ];
  
  export const envChecker = () => {
    const missedVariables: string[] = [];
    variables.forEach(variable => {
      if (typeof process.env[variable] === 'undefined') {
        missedVariables.push(variable)
      }
    });
  
    if (missedVariables.length) {
      throw new Error(`Some of environment variables are missed: ${missedVariables.join(', ')}`)
    }
  
    console.log('All environment variables are defined');
  };