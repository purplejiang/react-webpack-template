import React from 'react';
// import Test from 'components/Test';
// import Counter from 'components/Counter';
// import GetData from 'components/GetData';
import Event from 'components/hook-test/event';
import { UniAlarm, UniNotice, NoteModal } from '@uni/uni-alarm';

const TestPage = () => {
  // console.log(props);
  return (
    <div>
      <Event />
      <div style={{ width: '500px', margin: '0 auto' }}>
        <UniNotice>
          <UniAlarm dot={false} />
        </UniNotice>
        <NoteModal />
      </div>

      {/* tesssssttt
      <Counter />
      <GetData />
      <Test /> */}
    </div>
  );
};

export default TestPage;
