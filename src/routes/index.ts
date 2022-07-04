import HomePage from 'pages/Home';
import FollowingPage from 'pages/Following';
import UploadPage from 'pages/Upload';
import HeaderOnly from 'layout/HeaderOnly';

interface RouteType {
   path: string;
   element: () => JSX.Element;
   layout?: (props: any) => JSX.Element;
}
const publicRoute: RouteType[] = [
   { path: '/', element: HomePage },
   { path: '/following', element: FollowingPage },
   { path: '/upload', element: UploadPage, layout: HeaderOnly },
];

const privateRoute: RouteType[] = [];

export { publicRoute, privateRoute };
