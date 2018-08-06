/**
 * App Configuration Object
 */

class Config {
  public env: {
    [key: string]: string | undefined;
  };

  constructor() {
    this.env = {
      NODE_ENV: process.env.NODE_ENV,
    };
  }
}

const config: Config = new Config();
export default config;
