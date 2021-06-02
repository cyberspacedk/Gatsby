import { useState, useEffect } from 'react';

export const useLatestData = () => {
  const [slices, setSlices] = useState();
  const [masters, setMasters] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.GATSBY_SANITY_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query{
            StoreSettings(id:"downtown"){
              slicemaster{
                name
              }
              hotSlices{
                name
              }
            }
          }`,
        }),
      });

      const { data } = await response.json();
      const { hotSlices, slicemaster } = data.StoreSettings;

      setSlices(hotSlices);
      setMasters(slicemaster);
    })();
  }, []);

  return [slices, masters];
};
