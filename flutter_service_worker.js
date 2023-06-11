'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35720469cbd212b26c81484a6dd120c4",
".git/config": "d186063f6e611ff480b4080e2557a40c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "196c26a1d8f89f41143f873321d52433",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8722fa05bca4d0e570bd11fb1dce1202",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fb96a66242f6a0275a84f42fdf03c60",
".git/logs/refs/heads/main": "ec359a3a01fe5ffc54cd6de30d278a52",
".git/logs/refs/remotes/origin/main": "9aeeb7f12cb2276c684ec556e70057a7",
".git/objects/00/75cc69cb69571fc3666da687f3d26410e6e2c6": "b1fc3c12e700863ec36cdf6c4a0e8312",
".git/objects/00/815ba291a5582c221b7bed61916797e1d4930a": "7c6f94562214f978b2f8e2c12c33506a",
".git/objects/02/1bed407a3d9fe09619a810347c79a2d45c46c2": "c22a5cfbfc5c860ace2c3b1164c402f8",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/77ea49e78a40f1fd5acd2e3853aa0884a6ad99": "80da6a7403f056aaacdf0922507aebca",
".git/objects/09/9ba7ad0299a5904b0e1639ef2ed7bca7efd064": "c36b6f28cf44194a754ce2f701702c11",
".git/objects/0a/2e2fa9a9e47fcb9d08c791f3725634ad13364b": "ffe6e905bad2edd5c8171e072eb77b95",
".git/objects/0a/b46ab908c48d1be748aad55ae7ac08736905b4": "e5385bdbe5cde6cd7c5015006b4fc1ff",
".git/objects/0f/a549762bcc433dcfd310b0542883e9a37d982f": "a70a2d9fb4f7daf6c0c6c13b6e3bb34c",
".git/objects/11/04293c403780d198de80945e3aab33838ed36a": "4bdfe937debe349d0591ed79bdf49688",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/61bb5f0ccfe54dbbaa514743ae1bbbbfb744ac": "0a01c9baf940dc70564dfde15cef1e86",
".git/objects/16/fe72e84cb572fa95ef354af080f4307820a579": "29f67a7b358eff44938bd008d0354d33",
".git/objects/18/765aad5f750f957423f9156c1ab1fec1369f34": "59dea810fafaba3ea6a55c2a3ec7fdcf",
".git/objects/1c/22e0e8c1d03dc949c8dce2fa1fe4387a1dfcad": "b85826fe4b7fa96a8e9be6aacdb86d44",
".git/objects/1d/1c9166fffaba6dc81913bf3742bc36b8488766": "3d75952fcba3dde2380d71b955807d50",
".git/objects/1f/6658b527d7581d037f9d6e600a7c5d14bb1813": "031ba4fca39f4a4fdd65200df651ae9b",
".git/objects/1f/8f8897e9799b4fa3bb3770048dfabe5f8ea00d": "bcda891f49dae12416ba011ce81fcbb9",
".git/objects/21/8ba7701bf28528a6517a76774c10241c5e7e75": "a53f6269e53c87a0b6714f0f5f278567",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/83e730069fcaa10e354aecc4691c5412c71ce5": "1d63c39e5778d209e5cf906bb899b6a7",
".git/objects/2c/292ea301a63005765243fd2973f679e43420d1": "dee5ef0ea82bb8eddd1276bda49fa259",
".git/objects/30/6e076e8642c982833d6f8d9c6bdeafcdb57261": "9437b0c698d10a2e35ef3dacb490818d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/8b42ad433235a85bb65d620d82496c040b429c": "c0a282bb47eb80a9f61fbcb168a3cf9a",
".git/objects/39/63b7c3b6c43eaa1f0c5b73c93db79ec23ea9a6": "5947c18b3600d3b209a33ba85b9fdfc8",
".git/objects/3d/a15a14b35e64244bea89158a909983924c3c2b": "33c83938b75b3a2d0eabab3472e9ed2a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/7fd83c3733f80e4dff269c41d3bca03e21fcdb": "4872a2eb720dde28d8dab670612782d1",
".git/objects/43/75343223f7c203d4a972dace294ff2e88a037b": "d5074b5462a4ccc6287ee9fd5d906ab5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b542d444522acee2da2ea8218abe3eaffece9c": "67f5e4a4c2e51f54d118d8a28fea7b27",
".git/objects/4b/3295395e4b5298aefa917dd7162dd998afb9d9": "a2af925950c152ed218365fdecd384d0",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/24d8d977207044866e5afdf2d90081f82504da": "44c12d63c9040edccf6e9998dfdc2cb1",
".git/objects/4d/06d93687d5571062cd5f09582f8b96452b4e71": "8715da1e2a442e3fde9879431d152c09",
".git/objects/4d/4fb794f0123a28f6b9e19d5e488caf10582b7a": "10c8a709caf231eb524115b4527949b3",
".git/objects/4e/8b61f270e098ff7889d5c81e10643c0915cf5a": "72e57a842c6ffc7f4551b996be06e31f",
".git/objects/4f/997096a4d226b0dc6e93e52b3cf1abf9b9cb06": "db9450ab21e6e979c8a285c9cf1c0a71",
".git/objects/51/2ccbc3c9d49b311729d3b82561bcdee0556bee": "67489c9929f8acb18a732e9bc1723144",
".git/objects/51/4dbcf50bada718f34daa041a3c4d7b364b21ce": "e45908ec6a1aac86d01dab51632149f4",
".git/objects/52/7bfcd9535de1e18a1f41c271f4631598234ed8": "3165c6ef05c06e3d5fa842f56693233d",
".git/objects/53/3135637eafd7077ee9ba50f457a15d059447ec": "7429619f83cec8efc853c35258f06656",
".git/objects/54/f7fa0939476522d487491e11bfce83d21436cc": "361517c8118f41bdb774befd1ce7789e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/77c5be5b6ed0fcac069c2986b5c2bd410bae9f": "5f8c3797f4fa6807a365f39cf84f4be3",
".git/objects/57/286036a123e014d9e7794281fbd23ece6567fa": "9f1a15e966bd782721ac64941135cacf",
".git/objects/58/a3cd7995a38b9a00ff66eefb1070dec8e5e36d": "f6f25ac381c7e049a958c1ec402da942",
".git/objects/5c/a937991b610df02e53c364f9717436c929a513": "abb9c4f12aa5e4c92a53dd70cb14cb3e",
".git/objects/5d/4364ccffa54b64e71ca257354751a174bc3ccb": "9dab59cd067a85dcf21caa2e293b80ae",
".git/objects/5f/09c092d3671ba8b0cdf370984867953f9f2e43": "a6522f85a8f9057d58c3754aac8cd02e",
".git/objects/5f/55d860d0b08fd305a096b7369f48fe2566857f": "9142ddf59b0177a452a8f4c9a6ae967d",
".git/objects/61/392af14c224ed04872d82bda4ec4110e2d0096": "66616c89e4f6fe8629c63b170d3955bf",
".git/objects/62/8007f52cd42f52c31ae89d1018b8cad601a94a": "0a00cb74a794c710a2a33d176775875b",
".git/objects/64/00b65ad73648f348bb5831196a88008afcb1e5": "9bb340f981aa5baa1fffe4e7d3485766",
".git/objects/65/ede6efd7290266a0383a2d3b8621d6a4371b5f": "12660cacd6221e56205e36b1abdf29f9",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/6b1b1fa2d049c416c67759f14220c75b5ed820": "644c4f5c2f78b2f180a2738cf660615a",
".git/objects/6e/9a7a0c3f415135198090923433a4f590f51259": "f182046cb4c0047ab27d9ed3eb4b0aab",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/01fd98eeb88d1da8d54670e9ebb4db57dc9c2c": "052791b2145017e13a7f23c5143987cb",
".git/objects/78/c6c434f904d5ecf088b55736dbd149bee095e1": "3bd795e5e51d08c5f68d0fcc39515791",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/39447b7dbf29f09dc041fc968ad49c05cf62dd": "065890d0753ed2ef41a24114570d6eed",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/0e19f26d017e200961dddb0d1fd73b0417afde": "4a14932cb4e5f9ee71943daf790e5659",
".git/objects/7f/6701b5b94a6d87be24237c433e942fbd809df2": "66edbf40cdb2432d39f1c88a052e914c",
".git/objects/80/02602a9008402b9fc4982b44834c516d262789": "bf11f4cffccde2149c15b4e0e417bdab",
".git/objects/83/9ac636eece823fb09a3334f1f510f060f28099": "ec501b2705e735dc4b653c2dea3d9a94",
".git/objects/83/aba850f0bdcf7b473c4d800dc5b38f4c69b0da": "ae8c2a0a79db859c5d8dccc074b0583c",
".git/objects/85/bab0076ff7ad5a19578e7e3c067990e122d75b": "5b56c7c22a85d407931e28963d91e2e8",
".git/objects/85/edcdf474f651efef420545883db0e395c0fe3b": "9d1d295d5f98c72a626aff818fd8436e",
".git/objects/87/a4f1094354300fe58b52c971ea57b12de1c5d9": "fe24432a08adc06e990038f3ccc0865d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e6681fd0be5f45a52a558a20578be3ec930e60": "cc1547001a7640ec35b8e2f0ce1aec79",
".git/objects/8c/0aac19ce355d31bd01e00845d78a5ad5d89454": "52f1d418abcff9706fa601cc70c12d89",
".git/objects/8c/7f8983cecfdf15c0c7454d2021ec869d106815": "60ce4cea514aacd5d1adbfd33ae721c3",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/b696eb63a739d26c42f992eac771af7845d077": "c36267618000e3b11267220acb661041",
".git/objects/8d/4e2b7c25e4426fa06dfb887d844d999b46e72e": "57a0e7f9274caa377df8272983a3cbbb",
".git/objects/8f/214b51ee9e5577e420d81f8f30bc9b4ad5db7c": "ff603f5d3438d0db90f0376f6d693aaa",
".git/objects/90/1acab21471eddb2538c9e66e1a233af36e8869": "1febf52fc5c806771fbca493394eaa08",
".git/objects/90/4df709b91176a2c39c0928f3cef4d972b161b2": "6e601c77d7f929ff44bcd8f4aaccb792",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/93/e2e27511d6ca990f30d726cb73dfae9703aaab": "3562807063a06564146d6ceee95d370c",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/558d64d44485d1d670ebba0114441810c9980c": "a86fdc15bd6f192985b75e8ef80833d9",
".git/objects/97/5302cd8f66ce3350707fbd43d4d24704c88ea8": "3235d3b5a04a607e26d6b3d1c06cf65a",
".git/objects/9a/5110658c5dea54a9b5dc3b40b39ed66c165f53": "69985dc7c04ae64e71fa06209111e2e3",
".git/objects/9b/49c527022cb7b62f2d6013983fdc6c8c0e81ac": "d0e42a24e6b35012622bcba7196d7983",
".git/objects/9d/4552472455b7df5440c9c41c46296a8beca9ec": "0fcbf9098199b2014aca7a2b000f9f4f",
".git/objects/9d/7c3030d0a14ffadd721c0cff4ec15e66a0432f": "f117e0838d7ad750843ff1f0e38864c2",
".git/objects/9d/7ec3a1e54eab6aeb78f69a472a13ca9216bbcd": "4858f8e6d82c7a71107aa7934f14b6e1",
".git/objects/9f/00043a32ad4708ca485c901509d56c3871460a": "29efff8ddc9047ad7a3503c70f26b89e",
".git/objects/9f/ff093cfd64207fea91c1711cf46ff53d648a70": "0b57ea068e3fbf6846b5d59ba2f7a00f",
".git/objects/a0/8dc5e267fddf832fe3e97e60454efa808e7345": "bab094380c7860b35289cfea349f2d31",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/bd8cdb394c3cbbeffb30460db41ca2f4737d04": "e0469d35f0cf30962b77f47a3bcbfb72",
".git/objects/a5/e22a7edbb50128b7710831619e7a11926a995c": "bee9f0ce4e031a004245a041e3be370b",
".git/objects/a8/6a2870b7fb5fee2fb809035f8161a76ec032fa": "08aa27e00f87093e1b7f3919bae1a13d",
".git/objects/a8/b0cc71da019861ea6b12f465232d977bb1c61e": "3e4b41b038a24c9e76f308e5d30a57fa",
".git/objects/aa/8343a2a08d6f8302ee1f79877b9f902128f3d1": "681a9c08b7912d80c679d790268f2dea",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e8fe0d7516126bfe6c1962e7806bd9f32eb865": "91acc43fd0e52e041209a9e8caae8029",
".git/objects/b1/141ebe0de2cb046bbc0378aa2cb66569bab7a0": "78490723ed41d6bdb3e67ca3de57765b",
".git/objects/b2/34e1c782673768448e694c7e44ea32138636f4": "952bcf2599c5c601e0287778418c14b2",
".git/objects/b3/04eaf08ea20d7c31e4c3de0fae5eca0621b531": "1b27d04872ac15d291c66323b9e96b0e",
".git/objects/b5/f80b54ddda5b78c6272b67f08aa7b2e445f28b": "bbaf300c759283343449e2f70b961031",
".git/objects/b6/0b7dd11ee88e0eba732b2493e99b2444f003ab": "1d84abffc480f99c15e84d40b8f9e6fe",
".git/objects/b6/6a44a170d23d7b2ae5ea0088086be699d26994": "d2b6a84389d0df29eed6fd04da6a26bc",
".git/objects/b6/a1e10cef41835399eb3a1fcd47899eb6905ca6": "796537efb36050a529773020860a55f7",
".git/objects/b6/a9003ecc865592f753f6ea6569acde07d598bd": "68d559f973f9dbbb75cda1b26fc7ae47",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/040df1eb7ee0bb873fb17008c59c72e54f6f35": "a4e2efd2ab5fd26c77190d53a65f8b68",
".git/objects/c2/80811c47eb20d556b91d31ff5970c495cd9be3": "cdb59427e641ecd58e119308070c38f4",
".git/objects/c3/8b1b3a2bdc8ab7cddaa41d2185ebbe9322a2be": "609418179af3c00be2fdb47187bfc917",
".git/objects/c4/0db2fd63c7b50a554ff06c7aebe47a3fcee5e8": "a13698a5578f1d1a501d533f5e92608b",
".git/objects/c5/103c54244550767ebb9e3b28eb3660a1845a93": "c7d6fff1372a61766952b7cdc789d440",
".git/objects/c5/7679e413f32ac8849bdeca06c5233c364b31fc": "ee1ea9671983499a1a348a673baefdca",
".git/objects/ca/b807eb6b679194e073a0897db042bbea3c1c78": "d59695490df319ea725b98df7eed1905",
".git/objects/cd/89f5520f2563367a8073af2e69b2eedfa43fb6": "c9cf3b87ddda810de093024e32dbf6ff",
".git/objects/d1/b03fd0b13ffa35a193b8b0ee1d565de26d61fd": "b20918d617f0274369e2f413addbff87",
".git/objects/d3/5928b5c681518564a7a62b423c10124cdbca7c": "5ceb03c75aff76007551025714af2007",
".git/objects/d5/92e2234fd5225fc37aeedea48fa44dd441fa95": "32c8290a3d248fcfe88943975ed62c34",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/332dffa5e5f395c1415a0ae0f83282843075b1": "6304f7bdc81cfff43b94acfe580fc04b",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e1/5d44083674f460f4778b2799f280ac05bee4d0": "bb8e4aa3753a890b223e268af0255925",
".git/objects/e3/69be95b8c8377a4fc171fa3fa6e443b455f749": "028ef6d844440d9c96db9663ac90b717",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d64d35bbc560326ffedd4032ad14720718d6af": "e883f94a72e71b009e44e76ce0c8de44",
".git/objects/eb/0c95047eaa5336b48a03f846271ef1ffd08003": "c1bfe52b7ae6d479c953516add502b59",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d3b7f8edb06fc90f114885e0e1b957bd8a32f9": "47f575937909f1a935a365983cee793f",
".git/objects/ec/e3406cd95dfb5f30ad58da0e4770db39634139": "cd38dce225783f86b7b5a93c3beef442",
".git/objects/ee/29e0c17ff485b16d0dc636ff94b7873199f94e": "6796d68156de1df6ea80608da340ed49",
".git/objects/f0/df74866bfc66f9da4665719c2d34e60ce8b1e0": "3d8e2218034d42a778636fbd7aaf7020",
".git/objects/f2/91ef3ea869faa97212406710f5d4250bbf94ec": "9e4da359b915dba34177e700d174f61d",
".git/objects/fa/ce295105d56c8587f521186e43fdfeb2454234": "8b4762db210c4bf113080023aadfc3a3",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/554fd700efa12274a133435114c78b8f7dec0e": "8aad70379ffa3681a321b5fafe9fecfd",
".git/ORIG_HEAD": "51129dfe2dfb84e646717c3a7696812a",
".git/refs/heads/main": "fa36c29f58a2950ea17e5db26ab6f9ce",
".git/refs/remotes/origin/main": "fa36c29f58a2950ea17e5db26ab6f9ce",
"assets/AssetManifest.json": "d1f47146e8a176887ea86e724c9732b3",
"assets/assets/asker.jpeg": "5ce8a652ddf95c4aa0606455927d9ddf",
"assets/assets/categories/books.jpg": "ebf48038e0bdf59b72180ef65ac472e2",
"assets/assets/categories/business.jpg": "5b672ea0880238e78e1344aeaced4737",
"assets/assets/categories/cinema.jpg": "27c48b3c6b5edd28b8044412db4743c4",
"assets/assets/categories/education.jpg": "5e6ffc1036979419b57397eaf0aebf8a",
"assets/assets/categories/entertainment.jpg": "6a5971d6912a88945f246439bb46fd80",
"assets/assets/categories/health.jpg": "9b7e8ee72b2940ba750181fa6149af88",
"assets/assets/categories/highlights.jpg": "a3446d65e253013d61879a1e07d44fd8",
"assets/assets/categories/lifestyle.jpg": "4e5d0159ca43c96241d3250f2265be42",
"assets/assets/categories/local.jpeg": "b8d2c47a7c5f351ebe2758138ab74306",
"assets/assets/categories/politics.jpeg": "d5fb7140ee7ec4d204249e208fe31432",
"assets/assets/categories/science.jpg": "70e145f32a82138ed13c3e0cb0307014",
"assets/assets/categories/sports.jpg": "a149ca4d2c81a54d62698e57861a2bcc",
"assets/assets/categories/world.jpg": "41c0d196dff3ad9988d8363e83dbb48a",
"assets/assets/cloudy.png": "8961aca51ee3c6a3389f220190adc9fa",
"assets/assets/france.jpeg": "478a74ea372fba447293d6f575e75256",
"assets/assets/icons/back.png": "4074b336864c3cbd75b828ed1543c844",
"assets/assets/icons/back2.png": "d8a95d3b707251e069465f1937458910",
"assets/assets/icons/back3.png": "eaf6a4fbc90bb56b8910a61a9388979c",
"assets/assets/icons/bookmark.png": "1a77b82fa5cf6252cb3169e29c613d85",
"assets/assets/icons/cancel.png": "4a43bf7ca4df3a5a72113bbb5baf11cf",
"assets/assets/icons/drawer.jpg": "35bc3f0687ff49a64d5d2479aa031332",
"assets/assets/icons/drawer.png": "dfa900aca8411c58d0fb74b682236328",
"assets/assets/icons/facebook1.png": "8b181561f71df705b96b70da81802ba2",
"assets/assets/icons/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/icons/home.png": "ba87e2e75b8647d05dbd20a0e43cdff3",
"assets/assets/icons/search.png": "3b32f997928a58ab7af7c883ca0b4f03",
"assets/assets/icons/send.png": "64d360dc6de7f93095ffe32e3f53c804",
"assets/assets/icons/share.png": "9bfb55ad3d67a119e7d6c59d0f2e65d4",
"assets/assets/icons/twitter.png": "400dc88500c0bc5e11f6c953dedcc7ab",
"assets/assets/news.png": "fc17bddf8fffba69d3e5867b932dac21",
"assets/assets/night.png": "4fdeb9006f5a5b8e6e74e9c6ff46468c",
"assets/assets/togg.jpg": "41a9165ff56eaa6c986c9be0772f62f4",
"assets/assets/trump.jpeg": "7245423557eca5ae04953c4b5001946a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "14c7d5b9076c9d644691ce2445ae7bfe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fab6b7208d5706778310b8485d8bf0ef",
"/": "fab6b7208d5706778310b8485d8bf0ef",
"main.dart.js": "2e5a969dabc8cbfd2d5e246696efbe10",
"manifest.json": "4bd5bd3060e89a5b84e42be946d77494",
"version.json": "2191889cdc40274bb08f6357b1739325"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
