import app from './app';
import './database';

app.listen(3000, () => {
  console.log(`Liste on port: ${3000}`);
});
