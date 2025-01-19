import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

// custom formate for console logging with colors
const consoleLogFormate = format.combine(
    format.colorize(),
    format.printf(({level, message, timestamp}) => {
        return `${level}: ${message}`;
    })
);

// Create a Winston logger

const logger = createLogger({
  levels: 'info',
  format: combine(
    colorize(),
    timestamp(),
    json()
  ),
  transports : [
    new transports.Console({
        format: consoleLogFormate
    }),
    new transports.File({filename: 'app.log'})
  ],
  });

  export default logger;




