// const BASE_URL= "https://maps.googleapis.com/maps/api/place"
// const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

// export async function GET (request){
//   const {searchParams}=new URL (request.url)
//   const category = searchParams.get['category']
//   const radius=searchParams.get("radius");
//   const lat=searchParams.get("lat");
//   const lng=searchParams.get("lng");

//   const res = await fetch(
//     BASE_URL+"/textsearch/json?query="+category+
//     "&location"+lat+","+lng+
//     '&radius='+radius+
//     "&key="+ GOOGLE_MAP_API_KEY,
//     {
//       headers:{
//         "Content-Type":"application/json",
//       },
//     }
//   );
//   const product = await res.json();

//   return json({product});
// }

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const radius = searchParams.get('radius');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const res = await fetch(
    `${BASE_URL}/textsearch/json?query=${category}&location=${lat},${lng}&radius=${radius}&key=${GOOGLE_MAP_API_KEY}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const places = await res.json();
  return new Response(JSON.stringify(places), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}
