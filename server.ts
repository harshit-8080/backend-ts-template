import { logger } from './src/config/logger';
import app from './src/app';
import { CONFIG } from './src/config';

const PORT = CONFIG.PORT || 8080;

const startServer = async (PORT: number) => {
  try {
    app.listen(PORT || 8080, () => {
      logger.info(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Something Went Wrong ');
  }
};

startServer(PORT as number);
