import { Avatar } from "./avatar";

/**
 * Generiert die Avatare
 */
export const AVATAR_COLLECTION = new Map <string,Avatar>([
    ["nina", new Avatar ("Nina", "w", "assets/avatar_Img/Nina_Default.svg", 
    "assets/avatar_Img/Nina_Grin.svg","assets/avatar_Img/Nina_Love.svg",
    "assets/avatar_Img/Nina_Smile.svg","assets/avatar_Img/Nina_Talking.svg")],
    ["tom", new Avatar ("Tom", "m", "assets/avatar_Img/Tom_Default.svg", 
    "assets/avatar_Img/Tom_Grin.svg","assets/avatar_Img/Tom_Love.svg",
    "assets/avatar_Img/Tom_Smile.svg","assets/avatar_Img/Tom_Talking.svg")]
]);
    
