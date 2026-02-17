import { Button, Frog, TextInput } from 'frog';
import { handle } from 'frog/next';

const app = new Frog({
  assetsPath: '/',
  basePath: '/api/frame',
});

// Frame for checking if a user follows a specific FID
app.frame('/', (c) => {
  const { buttonValue, status } = c;
  
  const isFollowing = buttonValue === 'check' ? true : false; // Logic placeholder for Hub check

  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', background: '#432889', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', fontSize: 60 }}>
        {status === 'initial' ? 'Are you a follower?' : isFollowing ? '✅ Following' : '❌ Not Following'}
      </div>
    ),
    intents: [
      <Button value="check">Check Status</Button>,
      <Button.Link href="https://warpcast.com/">Follow Now</Button.Link>
    ],
  });
});

export const GET = handle(app);
export const POST = handle(app);
