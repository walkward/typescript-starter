/**
 * App Configuration Object
 */

class Config {
  public env: {
    NODE_ENV: string;
  };

  constructor() {
    this.env = {
      NODE_ENV: process.env.NODE_ENV,
    };
  }
}

const config: Config = new Config();
export default config;
