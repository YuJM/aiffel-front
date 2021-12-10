/**
 *  ex: {
 *     "id": 1,
 *     "title": "질문이 있습니다 ",
 *     "content": "불어 밝은 위하여 커다란 사라지지 새 가진 같은 가는 것이다. 못하다 무엇을 용기가 그들은 이것이다. 동산에는 있으며, 바로 이것을 것은 길지 인생을 청춘 그들을 끓는다. 피고, 위하여 피에 품었기 속잎나고, 무한한 사랑의 말이다. 눈에 못하다 투명하되 우리 인간의 간에 미묘한 영원히 아름다우냐? 장식하는 광야에서 보내는 얼음 고행을 긴지라 이것이다. 사랑의 더운지라 있음으로써 위하여, 놀이 쓸쓸하랴? 주며, 황금시대를 현저하게 있음으로써 꽃 봄바람이다. 청춘의 피가 없는 것은 말이다.",
 *     "isLiked": false,
 *     "tag": {
 *         "name": "bug",
 *         "color": "#ff1357"
 *     }
 * }
 */
export interface IForum {
  id?: number;
  title: string;
  content: string;
  isLiked: boolean;
  tag?: {
    name: string;
    color: string;
  };
}
