import { EventLiveStream } from '@the-orange-alliance/api/lib/cjs/models';
import { Grid } from '@mui/material';
import LiveStreamPanel from '../LiveStreamPanel';

const DualHorizontal = ({
  streams,
  showChat
}: {
  streams: EventLiveStream[];
  showChat: boolean;
}) => {
  return (
    <Grid container className={'h-100'} direction={'row'} style={{ width: '100vw' }}>
      <Grid item className={'h-100'} xs={showChat ? 9 : 12}>
        <Grid className={'m-0 h-100'} container direction={'column'}>
          <Grid item xs={6}>
            <LiveStreamPanel streams={streams} />
          </Grid>
          <Grid item xs={6}>
            <LiveStreamPanel streams={streams} />
          </Grid>
        </Grid>
      </Grid>
      {showChat && (
        <Grid item xs={3} className="h-100 w-100">
          <iframe
            className={'h-100 w-100'}
            frameBorder="0"
            scrolling="no"
            src="https://www.twitch.tv/embed/theorangealliance/chat?darkpopout&parent=theorangealliance.org&parent=localhost"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default DualHorizontal;
