import React, { useState, useCallback } from 'react';
import { useEventListener } from '../hooks/useEventListener';

const Event = () => {
  const [location, setLocation] = useState({ x: 0, y: 0 });

  // 利用useCallback来处理回调
  // ... 这里依赖将不会发生改变
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setLocation({ x: clientX, y: clientY });
    },
    [setLocation]
  );

  useEventListener('mousemove', handler);
  return (
    <div>
      event location:
      {location.x},{location.y}
    </div>
  );
};

export default Event;
