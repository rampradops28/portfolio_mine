import Work1 from "../../assets/native-jobs.png";
import Work2 from "../../assets/cryptoverse.png";
import Work3 from "../../assets/travel.png";
import Work4 from "../../assets/blog-1.svg";
import backend1 from '../../assets/backend1.png';
import python from '../../assets/python1.png'

const Menu = [
	{
		id: 1,
		image: Work1,
		title: "React Native Jobs App",
		category: ["Frontend", "React"],
		repositoryUrl: "https://github.com/GregSithole/react-native-jobs"
	},
	{
		id: 2,
		image: Work2,
		title: "Cryptoverse",
		category: ["Frontend", "React"],
		url: "https://cryptoverse.gregsithole.com",
		repositoryUrl: "https://github.com/GregSithole/crypto-app"
	},
	{
		id: 3,
		image: Work3,
		title: "Travel Advisor",
		category: ["Frontend"],
		url: "https://travel.gregsithole.com",
		repositoryUrl: "https://github.com/GregSithole/travel-advisor"
	},
	{
		id: 4,
		image: backend1,
		title: "Student Management System",
		category: ["Backend"],
		url: "https://github.com/rampradops28/node_crud",
		repositoryUrl: "https://github.com/rampradops28/node_crud"
	},
	{
		id:5, 
		image: python,
		title: "WebScraping Data",
		category: ["Python"],
		repositoryUrl: "https://github.com/rampradops28/web_scrab/tree/main"
	}
];

export default Menu;
