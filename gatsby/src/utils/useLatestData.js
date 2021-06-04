import { useState, useEffect } from 'react';

const gql = String.raw;
const deetsFragment = ` 
    _id
    name
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    } 
`;

export const useLatestData = () => {
  const [slices, setSlices] = useState();
  const [masters, setMasters] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(process.env.GATSBY_SANITY_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: gql`
              query {
                StoreSettings(id: "downtown") {
                  name
                  slicemaster {
                   ${deetsFragment}
                  }
                  hotSlices {
                   ${deetsFragment}
                  }
                }
              }
            `,
          }),
        });

        const { data } = await response.json();
        const { hotSlices, slicemaster } = data.StoreSettings;

        setSlices(hotSlices);
        setMasters(slicemaster);
      } catch (e) {
        console.log('Err', e.message);
      }
    })();
  }, []);

  return [slices, masters];
};
