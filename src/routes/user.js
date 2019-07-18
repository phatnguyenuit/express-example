import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const userID = req.params.userId;
  try {
    const user = await req.context.models.User.findById(userID).exec();
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(`Can not find any user having id = ${userID}`);
  }
});

export default router;
