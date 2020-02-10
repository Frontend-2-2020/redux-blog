const initialState = [
  {
    id: "1",
    createdAt: "2020-02-05T10:08:58.409Z",
    name: "Alberta Parker",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim odio vehicula magna condimentum fringilla. Vestibulum vitae interdum eros, id dignissim nibh. Sed varius libero sapien, quis eleifend ligula porta eget. Curabitur facilisis lorem sapien, in sagittis nisl mattis et. Sed maximus purus at condimentum rhoncus. Nam dui libero, bibendum in vestibulum faucibus, hendrerit ac ex. Proin mi nisl, consequat et ultricies eget, mollis pharetra sem. Aenean id pretium mauris, eget bibendum ante.",
    comments: [
      {
        id: "1",
        createdAt: "2020-02-04T18:16:10.104Z",
        name: "Miss Hilton Baumbach",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/happypeter1983/128.jpg",
        comment: "feed"
      },
      {
        id: "2",
        createdAt: "2020-02-04T13:28:21.133Z",
        name: "Myra Crooks",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bartjo/128.jpg",
        comment: "Kansas analyzer"
      },
      {
        id: "3",
        createdAt: "2020-02-05T05:34:03.317Z",
        name: "Jarod Daugherty",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/reideiredale/128.jpg",
        comment: "Tasty deposit open architecture"
      },
      {
        id: "4",
        createdAt: "2020-02-04T13:31:08.385Z",
        name: "Consuelo Goyette",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/raquelwilson/128.jpg",
        comment: "groupware"
      }
    ]
  },
  {
    id: "2",
    createdAt: "2020-02-05T07:57:41.077Z",
    name: "Dr. Raina Gusikowski",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg",
    body:
      "Pellentesque imperdiet a sapien vel euismod. In non sem ultrices, varius nulla vel, commodo massa. Nam metus odio, vulputate eu eros eget, luctus vehicula augue. Donec id eros sapien. Morbi eu vestibulum est, nec lobortis nisl. Nunc risus velit, rhoncus et condimentum sed, vehicula et nisl. Nulla suscipit feugiat nisi, ac dictum lorem tempus molestie. Pellentesque placerat dignissim ante, a porttitor odio tempus vitae. Vivamus rhoncus nisi in dictum aliquam. Quisque sollicitudin mi nec euismod pulvinar. Proin eu efficitur dolor. Donec ac mauris ut eros maximus elementum a id ipsum. Sed dignissim nulla in eros cursus porta. Etiam tempus ex dignissim ligula porttitor consequat. Ut lobortis magna eget semper egestas. Nunc eleifend, mauris ut consectetur interdum, quam nulla aliquam purus, hendrerit porttitor nibh ante nec arcu.",
    comments: [
      {
        id: "5",
        createdAt: "2020-02-05T07:47:18.925Z",
        name: "Madilyn Moore",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bcrad/128.jpg",
        comment: "Computers"
      }
    ]
  },
  {
    id: "3",
    createdAt: "2020-02-04T17:27:18.866Z",
    name: "Brant Zboncak",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dgajjar/128.jpg",
    body:
      "Nam congue est quis dolor venenatis, sed tempus ante convallis. Aliquam sit amet lectus rhoncus leo fermentum congue. Nam cursus mi sit amet lacinia tincidunt. Aliquam non iaculis velit. Duis lacinia fringilla tellus id rhoncus. Nullam sed ullamcorper eros. Nullam ullamcorper, enim ut rhoncus bibendum, urna magna pulvinar libero, a venenatis libero ipsum et sem. Pellentesque consectetur sem ac tortor feugiat, blandit pellentesque nisi efficitur. Donec mi felis, sodales ac placerat a, scelerisque vel ligula. Proin ac orci dui.",
    comments: [
      {
        id: "6",
        createdAt: "2020-02-04T14:28:17.643Z",
        name: "Noble Ritchie DVM",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/BrianPurkiss/128.jpg",
        comment: "connecting"
      },
      {
        id: "7",
        createdAt: "2020-02-05T05:18:44.058Z",
        name: "Dr. Newton Wyman",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/joemdesign/128.jpg",
        comment: "Gloves"
      }
    ]
  },
  {
    id: "4",
    createdAt: "2020-02-04T22:00:11.727Z",
    name: "Violet Dibbert",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg",
    body:
      "Nunc a vehicula nunc. Vivamus egestas risus vitae sem fringilla, sit amet convallis nisl elementum. In sit amet urna vitae velit aliquet tempus a eu tellus. Etiam dictum erat leo, a vestibulum est volutpat non. Integer a odio lobortis, luctus velit id, lacinia est. Vestibulum tristique id mi at tristique. Curabitur tincidunt, mauris malesuada semper dignissim, quam massa malesuada nisi, quis dignissim purus neque nec massa. Mauris venenatis nec eros id ultrices. Integer quis auctor felis. Mauris tincidunt urna sit amet elit iaculis malesuada. Vestibulum eu sem sed nunc fermentum sodales. Duis eu lobortis ante.",
    comments: [
      {
        id: "8",
        createdAt: "2020-02-04T16:11:53.468Z",
        name: "Kathlyn Rosenbaum",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/happypeter1983/128.jpg",
        comment: "Gorgeous"
      },
      {
        id: "9",
        createdAt: "2020-02-04T16:08:23.465Z",
        name: "Jakob Braun",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/zvchkelly/128.jpg",
        comment: "interfaces"
      },
      {
        id: "10",
        createdAt: "2020-02-05T12:42:49.827Z",
        name: "Miss Catherine Vandervort",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/felipeapiress/128.jpg",
        comment: "Delaware Bulgaria Pa'anga"
      },
      {
        id: "11",
        createdAt: "2020-02-05T09:30:42.895Z",
        name: "Simeon Krajcik V",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bartjo/128.jpg",
        comment: "enterprise Associate"
      },
      {
        id: "12",
        createdAt: "2020-02-04T18:58:45.418Z",
        name: "Mrs. Obie Monahan",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/2fockus/128.jpg",
        comment: "Bedfordshire"
      }
    ]
  }
];

function postsReducer(state = initialState, action) {
  return state;
}

export default postsReducer;
