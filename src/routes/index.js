import express from 'express';

import v1apiroutes from './v1/index.js';

const router = express.Router();

router.use('/v1',v1apiroutes);

export default router;