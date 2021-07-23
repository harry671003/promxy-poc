import yaml from 'js-yaml';
import fs from 'fs';

interface Config {
    backends: string[]
}

const config: Config = yaml.load(fs.readFileSync('./config.yml', 'utf8')) as Config;
console.log(config);

export default config;
