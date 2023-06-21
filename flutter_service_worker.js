'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35720469cbd212b26c81484a6dd120c4",
".git/config": "d186063f6e611ff480b4080e2557a40c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "52554dc6272a5a60632811dfd0f0066b",
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
".git/index": "5141aa6ba608f2c177d54fcb6dd5a6de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "07adbb0d5f3d98f12ec5bcc3af459a21",
".git/logs/refs/heads/main": "e17fe43356de22a5623536fa7ea4b459",
".git/logs/refs/remotes/origin/main": "2de1bc28b1adeb23e3e2cf1e553e79cf",
".git/objects/00/75cc69cb69571fc3666da687f3d26410e6e2c6": "b1fc3c12e700863ec36cdf6c4a0e8312",
".git/objects/00/815ba291a5582c221b7bed61916797e1d4930a": "7c6f94562214f978b2f8e2c12c33506a",
".git/objects/02/1bed407a3d9fe09619a810347c79a2d45c46c2": "c22a5cfbfc5c860ace2c3b1164c402f8",
".git/objects/02/95ba2ba00b54f811d731e842922b94d40754a8": "47c42a3f540d56de438586cf4395b01e",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/04/197f76dcd7c4ad19eb1bd1ba7d76697ce7a6d5": "a748ea891775baa94ac91ccef45433df",
".git/objects/05/c1b807f6926e40465c4283af0f6e51c80b8ac4": "a652236a278ae9c4423f2098c16869af",
".git/objects/06/9cf5fea0e984bdab5230c2261ee6f00cfe55b3": "44873fb4b041adf34c922cc20ba07430",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/e6e1666f9b1c9bd3b6c86938548e09c84cb76f": "dc1cd9876ce7fe9cb1060deb94e3245a",
".git/objects/08/77ea49e78a40f1fd5acd2e3853aa0884a6ad99": "80da6a7403f056aaacdf0922507aebca",
".git/objects/09/9ba7ad0299a5904b0e1639ef2ed7bca7efd064": "c36b6f28cf44194a754ce2f701702c11",
".git/objects/0a/2e2fa9a9e47fcb9d08c791f3725634ad13364b": "ffe6e905bad2edd5c8171e072eb77b95",
".git/objects/0a/b46ab908c48d1be748aad55ae7ac08736905b4": "e5385bdbe5cde6cd7c5015006b4fc1ff",
".git/objects/0c/6328ec853b4fa437433440eaea724dc86229c2": "e640e6fa6730de43d539556c7959f2bf",
".git/objects/0e/b2ab3941674e3b1fd196f5708ab28c286adefd": "53818ffbf626ff15b7238b63f7efac98",
".git/objects/0f/a549762bcc433dcfd310b0542883e9a37d982f": "a70a2d9fb4f7daf6c0c6c13b6e3bb34c",
".git/objects/11/04293c403780d198de80945e3aab33838ed36a": "4bdfe937debe349d0591ed79bdf49688",
".git/objects/11/de09408bf0572a7afb3ac4a90f85476049374c": "109a9964ebdf3ca4b7b10e4410ffcefc",
".git/objects/12/133ccff54661c90da540ebb12a78bb9df64ccd": "543e1d556338f0d87b15b96327583274",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/addd405ef83b4a7df1e6ac6eee718fbf0739c4": "96db9dad2f947e67b92cef66e4610231",
".git/objects/13/61bb5f0ccfe54dbbaa514743ae1bbbbfb744ac": "0a01c9baf940dc70564dfde15cef1e86",
".git/objects/13/7fe5c037c1f79ef24ff63b3392ffb9068ee33e": "ddbd2a0c37139adc8903a9c5977c486c",
".git/objects/14/dd4d01f40b7d378d7edbb61ac737620713c7f8": "a055955b9082397ec476b7f8175b17b0",
".git/objects/16/fe72e84cb572fa95ef354af080f4307820a579": "29f67a7b358eff44938bd008d0354d33",
".git/objects/18/65200837bb054e5c3fe7e8454779f716e0de7e": "50ade0e29af44724a9e19245e66a6549",
".git/objects/18/765aad5f750f957423f9156c1ab1fec1369f34": "59dea810fafaba3ea6a55c2a3ec7fdcf",
".git/objects/19/678749e5e00e4e49df130e0e7c0efa21164399": "e7cd66650b6ad0eae5fc1992b0c03974",
".git/objects/19/97aae7214f7f11c6b7a668314f90d3f82dd0f1": "add2c6ea7c35fa30be2a2847a00cb525",
".git/objects/1a/daf6f5361422368d6c21d28fc65f8f65829204": "ba3338d7df415264665198f6e7743087",
".git/objects/1b/c1bf5b7e59664618a05a61062326f884308ea2": "f6d036b6b1dbc025031f97c02acf2454",
".git/objects/1c/22e0e8c1d03dc949c8dce2fa1fe4387a1dfcad": "b85826fe4b7fa96a8e9be6aacdb86d44",
".git/objects/1d/1c9166fffaba6dc81913bf3742bc36b8488766": "3d75952fcba3dde2380d71b955807d50",
".git/objects/1d/dcc9ac37e12c61d968baf2d4245ab7840de260": "bed55b57c7b47ae726dc0667cb81fca6",
".git/objects/1f/6658b527d7581d037f9d6e600a7c5d14bb1813": "031ba4fca39f4a4fdd65200df651ae9b",
".git/objects/1f/8f8897e9799b4fa3bb3770048dfabe5f8ea00d": "bcda891f49dae12416ba011ce81fcbb9",
".git/objects/21/8ba7701bf28528a6517a76774c10241c5e7e75": "a53f6269e53c87a0b6714f0f5f278567",
".git/objects/22/aee38f5f8faaddea1bb2bdff0f2e0b813707b0": "e558d1b86c0fc1933eb0ffcf6d3c814f",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/24/09ec4a0cab580347b4870c9477ff07ab6b933c": "0859cbf3acb44ec991b2a0f4451f2482",
".git/objects/26/f5e698045dbd8f486f1766d8c83b11d5d7e3a8": "d91b6b0d3870f072d84a4d96c4f680fc",
".git/objects/29/83e730069fcaa10e354aecc4691c5412c71ce5": "1d63c39e5778d209e5cf906bb899b6a7",
".git/objects/2a/dec65a049d59b379a35ca56543631cc2d2d137": "e83317359ba25543c5751a4f088709e5",
".git/objects/2b/e873395447bca805fdcb119c5575f46d329051": "f2b706078f69116372440789942da997",
".git/objects/2c/292ea301a63005765243fd2973f679e43420d1": "dee5ef0ea82bb8eddd1276bda49fa259",
".git/objects/2e/16a4dabddece499ed4565e78982bb83e7a142e": "d251ccd9841a97645217019bcf94fb3c",
".git/objects/30/6e076e8642c982833d6f8d9c6bdeafcdb57261": "9437b0c698d10a2e35ef3dacb490818d",
".git/objects/30/ca7678109eca9d2369ff32b10d75f4153d2901": "2170b7fd5108309ad3cfe8b071dcf38a",
".git/objects/34/90a397505fc6089fc2c7756b62251f412035af": "ba2a57ea0e24018bcb5ffc78278febc0",
".git/objects/36/870bedd5879864e3dc7a6f42229898edbca919": "4a4ff137dafa1787782b65cecf7bff57",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/8b42ad433235a85bb65d620d82496c040b429c": "c0a282bb47eb80a9f61fbcb168a3cf9a",
".git/objects/39/215cb7dc17cf7420659357d5722a73044e9683": "130d6cc71523dbc5bb5404dfd208ee3c",
".git/objects/39/63b7c3b6c43eaa1f0c5b73c93db79ec23ea9a6": "5947c18b3600d3b209a33ba85b9fdfc8",
".git/objects/3b/4afe236ea4137d237e5bbcf67e6b5993daf414": "d66e712b8edb4150ee8bd768929ab4cc",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3c/1967e73a256f49daa28b1b5b519f310f79d123": "13fd48f759900f216cfb41448f5d2cdc",
".git/objects/3d/a15a14b35e64244bea89158a909983924c3c2b": "33c83938b75b3a2d0eabab3472e9ed2a",
".git/objects/3e/b830076eb6f775e409fd4c24cc74c2aad62cbe": "effc30374a1e7d7a2208383d470bcb3c",
".git/objects/40/9ee19b0e2a79631e24478561ca1be235de852d": "a7b2468ce83f6f06bd10802566e664a8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b91c7af1684a9a88b87848a17b4ddb19a5ee4a": "6787e6f5424f804ee18959d947c5304e",
".git/objects/42/7fd83c3733f80e4dff269c41d3bca03e21fcdb": "4872a2eb720dde28d8dab670612782d1",
".git/objects/43/75343223f7c203d4a972dace294ff2e88a037b": "d5074b5462a4ccc6287ee9fd5d906ab5",
".git/objects/43/ac2bbafbe59b8b0ff8eb8e0d7cbf1821f1c4c3": "a7f0cb5296c5f2193aedd277acdf8877",
".git/objects/45/365f8b13ccdb601072242060d85b2ea2000781": "73b73da4df7ad8e9b74603606677f597",
".git/objects/45/8cc8aceedb126a92c3206efddb9b68adf30f7c": "c9ae337de639c5e5b92ba4031b7dcf7d",
".git/objects/45/efddfc4cda02d20020d8c3979d90f59ab7885a": "46ec9ef48d914d9ae4b92d9ece560af1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/46/b542d444522acee2da2ea8218abe3eaffece9c": "67f5e4a4c2e51f54d118d8a28fea7b27",
".git/objects/49/21f3467f4fed09039cf00040a3539fba172f9f": "72ab20738d86e89fc2af5384fcd97e5c",
".git/objects/49/b9c061096e5d235e438e26b9db33c85a5df3cc": "31ea9e9f3ba5f6f62ed91887c5a87f48",
".git/objects/4b/3295395e4b5298aefa917dd7162dd998afb9d9": "a2af925950c152ed218365fdecd384d0",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/24d8d977207044866e5afdf2d90081f82504da": "44c12d63c9040edccf6e9998dfdc2cb1",
".git/objects/4c/b3f301a8afc25872a3b4de6d5582a8aff4aa05": "6e9725af8c2bc85c8b257529a2493a21",
".git/objects/4d/06d93687d5571062cd5f09582f8b96452b4e71": "8715da1e2a442e3fde9879431d152c09",
".git/objects/4d/4fb794f0123a28f6b9e19d5e488caf10582b7a": "10c8a709caf231eb524115b4527949b3",
".git/objects/4d/5d2757e1e969be8cf44ade188dc7ab35f31ddd": "a659ded76c668add73a58a03fbf368a6",
".git/objects/4e/8b61f270e098ff7889d5c81e10643c0915cf5a": "72e57a842c6ffc7f4551b996be06e31f",
".git/objects/4f/997096a4d226b0dc6e93e52b3cf1abf9b9cb06": "db9450ab21e6e979c8a285c9cf1c0a71",
".git/objects/50/829d90686854afb35d03a3fe54d81e6da67f27": "c3bde469f4e741d100d7fb2d78eb6c5c",
".git/objects/50/f389dddd6e288e424836d2b2f33fb1e8197498": "f39d5032c713542f053b2300d71407a0",
".git/objects/51/2ccbc3c9d49b311729d3b82561bcdee0556bee": "67489c9929f8acb18a732e9bc1723144",
".git/objects/51/4dbcf50bada718f34daa041a3c4d7b364b21ce": "e45908ec6a1aac86d01dab51632149f4",
".git/objects/51/fdcbed470b4e6c58cbd5043a8dd8ef53d94ae5": "e6c2142ae901fceb878e59abd248f4d2",
".git/objects/52/3abfe4e19018160d0556e8380075f32bbdcc0b": "f286b90c274bcdcecad1062ad43ed6c1",
".git/objects/52/7bfcd9535de1e18a1f41c271f4631598234ed8": "3165c6ef05c06e3d5fa842f56693233d",
".git/objects/53/289c1b8485464662681dee6d8c9d8191adf9a2": "275d94c476855db44ed80cd4f6468fd1",
".git/objects/53/3135637eafd7077ee9ba50f457a15d059447ec": "7429619f83cec8efc853c35258f06656",
".git/objects/54/f7fa0939476522d487491e11bfce83d21436cc": "361517c8118f41bdb774befd1ce7789e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/77c5be5b6ed0fcac069c2986b5c2bd410bae9f": "5f8c3797f4fa6807a365f39cf84f4be3",
".git/objects/56/7a467373fc8ae708427cec9350a95b39284ea5": "fb1ca16db9e4a57169c6df351c18d3bb",
".git/objects/57/0e94cf6e1c01eeba35647aa0760c69592ebfec": "e6ad1ecbe2661bd8adc2ed735c5cdec9",
".git/objects/57/286036a123e014d9e7794281fbd23ece6567fa": "9f1a15e966bd782721ac64941135cacf",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/58/a3cd7995a38b9a00ff66eefb1070dec8e5e36d": "f6f25ac381c7e049a958c1ec402da942",
".git/objects/5a/59b50dfcd044c037405e6d99110e7ddf71edee": "b2e29f6b19da9809c651e054e317f4c0",
".git/objects/5a/d257a82e857c01f81d5e5d5e84ab30bcd9b60a": "0c4f2a50972d922020b8bce1fc7b7231",
".git/objects/5c/a937991b610df02e53c364f9717436c929a513": "abb9c4f12aa5e4c92a53dd70cb14cb3e",
".git/objects/5d/4364ccffa54b64e71ca257354751a174bc3ccb": "9dab59cd067a85dcf21caa2e293b80ae",
".git/objects/5e/b1c651b50bda96c7890a8853d5742ef66896f6": "3277dbf07143249f80711341fb0892ae",
".git/objects/5f/09c092d3671ba8b0cdf370984867953f9f2e43": "a6522f85a8f9057d58c3754aac8cd02e",
".git/objects/5f/55d860d0b08fd305a096b7369f48fe2566857f": "9142ddf59b0177a452a8f4c9a6ae967d",
".git/objects/60/8d80fffd4f8b6d394396fac244cbeb6be7db77": "a86a5ebfbd12b9bfa7251d1feb639f35",
".git/objects/61/392af14c224ed04872d82bda4ec4110e2d0096": "66616c89e4f6fe8629c63b170d3955bf",
".git/objects/62/8007f52cd42f52c31ae89d1018b8cad601a94a": "0a00cb74a794c710a2a33d176775875b",
".git/objects/63/6a7acef40655129ef72f195dc854ba0ffe2d08": "558a3a27aaa41758a76ef74f5f26333f",
".git/objects/63/8c71f14aac1a20b1699a4c4413f695933603ee": "8571e745501e9a9004ab54a368c9562d",
".git/objects/64/00b65ad73648f348bb5831196a88008afcb1e5": "9bb340f981aa5baa1fffe4e7d3485766",
".git/objects/65/43635b4dcbc322be2106322238bfc71a098ccb": "3040fe39a7590adbdf2c2ae2b6139764",
".git/objects/65/ede6efd7290266a0383a2d3b8621d6a4371b5f": "12660cacd6221e56205e36b1abdf29f9",
".git/objects/67/50e8d8437718f5adc0f676d4a7f3d3ce91ea37": "677b97cb86f045309d7dec364b3807fa",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/06fd9d517b9c060226bbe998f922d67efc2e66": "4b83df914b5df43e3db7c9dc4b0ce2b0",
".git/objects/6e/6b1b1fa2d049c416c67759f14220c75b5ed820": "644c4f5c2f78b2f180a2738cf660615a",
".git/objects/6e/9a7a0c3f415135198090923433a4f590f51259": "f182046cb4c0047ab27d9ed3eb4b0aab",
".git/objects/73/a2eeeca1c7b6c52893cb194ef128023b46d3f4": "10f5d2ab42b5ccb952bf8a6ee33bf686",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/1f2dce7715c1d605487474ed7a6f2e80785330": "5b33d5e04ddc34a7059f928d1627271b",
".git/objects/76/31832bf28d10b8d13b7240700cd1c0950bf645": "e34bf76d863ca1e6d7a2b48b7ce8c628",
".git/objects/77/01fd98eeb88d1da8d54670e9ebb4db57dc9c2c": "052791b2145017e13a7f23c5143987cb",
".git/objects/78/b62800c713919e48f62bcc8780067f0a940cca": "ed68964e4faca9f36bfedb370fea6a5d",
".git/objects/78/c6c434f904d5ecf088b55736dbd149bee095e1": "3bd795e5e51d08c5f68d0fcc39515791",
".git/objects/79/8f2a0256f74387cda88308452124df4e479fa4": "9d1aebbae594e49848b3b5426f90a5a4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/7a/39447b7dbf29f09dc041fc968ad49c05cf62dd": "065890d0753ed2ef41a24114570d6eed",
".git/objects/7a/682b6f3ffadb76b1ae2f4191e3bd2dce45f727": "d2ec64cc3df16f2c45aa14351a64875e",
".git/objects/7b/3d4f160ab502598271db2a0db80394f6ffb727": "89ffd531f5c8637671cfd854ee3adac8",
".git/objects/7c/23c3dc267cf0d05e25250c70611155432abdca": "23fe0f9a1d2a1ba240ca7f5b5490b799",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/0e19f26d017e200961dddb0d1fd73b0417afde": "4a14932cb4e5f9ee71943daf790e5659",
".git/objects/7d/86f26add37953cc700bfef6dc205b2ac6dbcd7": "8f64e062a090d4d95357e556843ce145",
".git/objects/7e/47a349e5588ece5af70067231e7ba4c7b552a4": "402e88b2d612a577dfc92056cefff8d4",
".git/objects/7e/9310fe025f94102fdf0dfc324af9aca5d54e08": "474b6e4eff71d184ab291e848620e824",
".git/objects/7f/6701b5b94a6d87be24237c433e942fbd809df2": "66edbf40cdb2432d39f1c88a052e914c",
".git/objects/80/02602a9008402b9fc4982b44834c516d262789": "bf11f4cffccde2149c15b4e0e417bdab",
".git/objects/80/1749f09497a1f64f84f679eb4b77ebcc538562": "1fa1647a31d0dce08d900d594cf39f7a",
".git/objects/81/dcabee82e32d416a0079443c762dcb93c37659": "617723f361120f6e543c882ec18f4a7c",
".git/objects/81/f652052a47bc3e4f2dd798e6e4978547ccfbfe": "e987e7ae8a2731c472292e11a110e9a1",
".git/objects/82/3f1f1429b6b06d815998442e05d45203e7f165": "4bd104b2147c1b1aa111f74070699391",
".git/objects/82/c5f8c0ed02f0906a15d8269d08f0b75730c403": "1e28965e66a5773f29a2018b30a1439b",
".git/objects/83/9ac636eece823fb09a3334f1f510f060f28099": "ec501b2705e735dc4b653c2dea3d9a94",
".git/objects/83/aba850f0bdcf7b473c4d800dc5b38f4c69b0da": "ae8c2a0a79db859c5d8dccc074b0583c",
".git/objects/84/75f970a8571d726d754148c4754c4165faa475": "5f33c9ed584f53b75935cf42b68164d8",
".git/objects/85/93a36faeb439f2d3d3722aff5cdc6c44364ad0": "99f071969881b5218db2ce84b9cd28dc",
".git/objects/85/bab0076ff7ad5a19578e7e3c067990e122d75b": "5b56c7c22a85d407931e28963d91e2e8",
".git/objects/85/edcdf474f651efef420545883db0e395c0fe3b": "9d1d295d5f98c72a626aff818fd8436e",
".git/objects/86/4f51fc0030fa40a24f89c4b64a996ff3b53040": "a7045f2071cf89b47213469fc793b5e6",
".git/objects/86/c14b32c130bf0d11bf88edd6c2f75880383f9f": "883259f7610b91dc3957d09f00b49101",
".git/objects/86/c85c1a2c41eeddb8276a5f3164d9c0b937334b": "1089bc8b9f40d1851c34622b339eef68",
".git/objects/86/d58b47659689e7311d60bccf85d01d1e55a28f": "43a423ac7d0a7bdb719ccab939c6f599",
".git/objects/87/a4f1094354300fe58b52c971ea57b12de1c5d9": "fe24432a08adc06e990038f3ccc0865d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e6681fd0be5f45a52a558a20578be3ec930e60": "cc1547001a7640ec35b8e2f0ce1aec79",
".git/objects/8c/0aac19ce355d31bd01e00845d78a5ad5d89454": "52f1d418abcff9706fa601cc70c12d89",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/8c/7f8983cecfdf15c0c7454d2021ec869d106815": "60ce4cea514aacd5d1adbfd33ae721c3",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/b696eb63a739d26c42f992eac771af7845d077": "c36267618000e3b11267220acb661041",
".git/objects/8d/4e2b7c25e4426fa06dfb887d844d999b46e72e": "57a0e7f9274caa377df8272983a3cbbb",
".git/objects/8e/e00d53889f88564b6d871d34d5bba4a1aa39ac": "184f2aad2f0d5cdf61d84c0e6d3e4d2d",
".git/objects/8f/214b51ee9e5577e420d81f8f30bc9b4ad5db7c": "ff603f5d3438d0db90f0376f6d693aaa",
".git/objects/90/1acab21471eddb2538c9e66e1a233af36e8869": "1febf52fc5c806771fbca493394eaa08",
".git/objects/90/4df709b91176a2c39c0928f3cef4d972b161b2": "6e601c77d7f929ff44bcd8f4aaccb792",
".git/objects/90/92aa5d93e8899249d18ea3c7fdbe2c5e42ac66": "c51ecc78431b4da199b1789cf096c8c8",
".git/objects/90/d0d075853a4e80aa98310aaec6b66e0a104dcb": "4ceebd4d955cf43679cbb44e60a4d7e2",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/fa4d4e22c7cbf6d0cd249622a987dd44018433": "312d710d2c6d5845915471f1306b34a8",
".git/objects/92/1b015ae30e7d5da74aae31793080a27fd0a36a": "18bedebda996241b1bbb8bc4b00198e1",
".git/objects/92/1f91ef4ea4619ccdbdadc902cd93c873aee504": "9b1f7ce04c1dc71e73e1f2cfe3250593",
".git/objects/92/7855904e4ff37ce69c20da787166bb40e2a367": "7e0fc5a9967571227e10aa1977d2247f",
".git/objects/93/e2e27511d6ca990f30d726cb73dfae9703aaab": "3562807063a06564146d6ceee95d370c",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/558d64d44485d1d670ebba0114441810c9980c": "a86fdc15bd6f192985b75e8ef80833d9",
".git/objects/97/5302cd8f66ce3350707fbd43d4d24704c88ea8": "3235d3b5a04a607e26d6b3d1c06cf65a",
".git/objects/9a/5110658c5dea54a9b5dc3b40b39ed66c165f53": "69985dc7c04ae64e71fa06209111e2e3",
".git/objects/9b/49c527022cb7b62f2d6013983fdc6c8c0e81ac": "d0e42a24e6b35012622bcba7196d7983",
".git/objects/9d/4552472455b7df5440c9c41c46296a8beca9ec": "0fcbf9098199b2014aca7a2b000f9f4f",
".git/objects/9d/66d60e33f2ddf2010de60f64e1ebd7e60973c9": "b9bd6d609bb6e0ede15c63753e2aeef7",
".git/objects/9d/7c3030d0a14ffadd721c0cff4ec15e66a0432f": "f117e0838d7ad750843ff1f0e38864c2",
".git/objects/9d/7ec3a1e54eab6aeb78f69a472a13ca9216bbcd": "4858f8e6d82c7a71107aa7934f14b6e1",
".git/objects/9d/97e62881ba72e899e3122293c7bc6e566c33f0": "5cb5f1446d807fab73ff25d8e2825503",
".git/objects/9f/00043a32ad4708ca485c901509d56c3871460a": "29efff8ddc9047ad7a3503c70f26b89e",
".git/objects/9f/f6576582214b06841224459e2498e3fba4c062": "06e9bd9de2859f837df1a77236300ff5",
".git/objects/9f/ff093cfd64207fea91c1711cf46ff53d648a70": "0b57ea068e3fbf6846b5d59ba2f7a00f",
".git/objects/a0/55ae0164426ebc1d40e172632418cd0c8ea214": "a315d4768e19761d9672c06bbda9cf53",
".git/objects/a0/8dc5e267fddf832fe3e97e60454efa808e7345": "bab094380c7860b35289cfea349f2d31",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0376ff59180854fe47e63345e3e466d88b97a0": "6499382747fedf290c6fb052c7b3bc9c",
".git/objects/a4/bd8cdb394c3cbbeffb30460db41ca2f4737d04": "e0469d35f0cf30962b77f47a3bcbfb72",
".git/objects/a5/e22a7edbb50128b7710831619e7a11926a995c": "bee9f0ce4e031a004245a041e3be370b",
".git/objects/a7/9cbc8747e49ec29c779d7b2b30942fbae411a3": "5567313686ac886be582d3f11b652eb9",
".git/objects/a7/b32267a06237a89fab0610d0a835eb6c9ae929": "cf4e357306474ec0413e36bc03b8c797",
".git/objects/a8/6a2870b7fb5fee2fb809035f8161a76ec032fa": "08aa27e00f87093e1b7f3919bae1a13d",
".git/objects/a8/b0cc71da019861ea6b12f465232d977bb1c61e": "3e4b41b038a24c9e76f308e5d30a57fa",
".git/objects/aa/23c489c1cab5cd21bf4863a0b495615e248db5": "539794364cc40c3d3fc0257908ff0938",
".git/objects/aa/8343a2a08d6f8302ee1f79877b9f902128f3d1": "681a9c08b7912d80c679d790268f2dea",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e1e4a620b447020c80dec41a5be7d3ce1d993a": "60d649e1030a0f01c9e17df2ba0152a3",
".git/objects/ac/768a91bb68c9efc17d9f66ede3873166546554": "d7f4ae3d3a0963d050f23777cecedf17",
".git/objects/ae/e8fe0d7516126bfe6c1962e7806bd9f32eb865": "91acc43fd0e52e041209a9e8caae8029",
".git/objects/b0/011878fc190705030f30bfdfcb9b7416158b48": "67733f3139368202a49822a512bad5a2",
".git/objects/b1/141ebe0de2cb046bbc0378aa2cb66569bab7a0": "78490723ed41d6bdb3e67ca3de57765b",
".git/objects/b1/ae9fb11791b0100e302a3f31239d6dfcf1d639": "8b827551d442f4b9ef9264edd68401d3",
".git/objects/b2/34e1c782673768448e694c7e44ea32138636f4": "952bcf2599c5c601e0287778418c14b2",
".git/objects/b2/37ac861fba15043ba567b3a8982c926d7cc6b2": "555026c6af45c2f08231c8e89c99ee91",
".git/objects/b3/04eaf08ea20d7c31e4c3de0fae5eca0621b531": "1b27d04872ac15d291c66323b9e96b0e",
".git/objects/b3/1c334f79093ea15be4b952740580e795179ae9": "2e603ded4636a85b7c12b106a7015022",
".git/objects/b5/aa9a2430dae944eef88dc29f305a9f38678f4f": "df5381c3fede3f98aa1f549ba80f766a",
".git/objects/b5/f80b54ddda5b78c6272b67f08aa7b2e445f28b": "bbaf300c759283343449e2f70b961031",
".git/objects/b6/0b7dd11ee88e0eba732b2493e99b2444f003ab": "1d84abffc480f99c15e84d40b8f9e6fe",
".git/objects/b6/6a44a170d23d7b2ae5ea0088086be699d26994": "d2b6a84389d0df29eed6fd04da6a26bc",
".git/objects/b6/a1e10cef41835399eb3a1fcd47899eb6905ca6": "796537efb36050a529773020860a55f7",
".git/objects/b6/a9003ecc865592f753f6ea6569acde07d598bd": "68d559f973f9dbbb75cda1b26fc7ae47",
".git/objects/b6/d7c0fb7b79efee401285ad82823f0f1c141706": "cc0ca89d595e9689c76b4aae9aa166f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/311aa334138cc9237f52781713e34f1bf5992d": "14e2c535a6fc8fa212822d1fed1575df",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a57c7a6171c8cac50ef430bfa395941bbc03f6": "169bdcceab17fd6609be17ead708612a",
".git/objects/ba/d164be2aed55e420176926f2b3d13c473a10e2": "7a3aa328906d11bdc9adefda55417c12",
".git/objects/bb/4869ad47a7e6523ce4f9588aaa5b1400347f77": "ea8df9f0c98f100a834d25beab1705a9",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/bd/9f787cb39491c7b90d77a9f8b3d36ba2eba02d": "ff44b000e803c4c779130474889b863f",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/6f2f0de68a3ce746682a8b69c035cafb3fd4da": "ff58f23eb7f65a2e9976c58729cb9268",
".git/objects/be/9c9fc3e3a4d9425946442fa23e8098d1d8b886": "e82b7d6d5d0dcf02be52e3ea89b8e442",
".git/objects/bf/040df1eb7ee0bb873fb17008c59c72e54f6f35": "a4e2efd2ab5fd26c77190d53a65f8b68",
".git/objects/bf/6f907915244c5c9c0e127d563dacf23d473181": "2f28bc24b4d7c849bacc90938b6f5af1",
".git/objects/c1/de7be49c497439ad835a65a0cb0aa20396c87f": "cb6de9f43d1c4b20cd35bfb6c7addfa4",
".git/objects/c2/80811c47eb20d556b91d31ff5970c495cd9be3": "cdb59427e641ecd58e119308070c38f4",
".git/objects/c3/8b1b3a2bdc8ab7cddaa41d2185ebbe9322a2be": "609418179af3c00be2fdb47187bfc917",
".git/objects/c4/0db2fd63c7b50a554ff06c7aebe47a3fcee5e8": "a13698a5578f1d1a501d533f5e92608b",
".git/objects/c4/760f76125ff20248698010ffa717dfb551d2ae": "2c2335f8365f199f2f8a972bb47559c3",
".git/objects/c5/103c54244550767ebb9e3b28eb3660a1845a93": "c7d6fff1372a61766952b7cdc789d440",
".git/objects/c5/7679e413f32ac8849bdeca06c5233c364b31fc": "ee1ea9671983499a1a348a673baefdca",
".git/objects/c9/233a1f2b4ef7dfaca460e79b4decb009492456": "d51d7aecb61db38cd4d2f61d6b5f0064",
".git/objects/ca/b807eb6b679194e073a0897db042bbea3c1c78": "d59695490df319ea725b98df7eed1905",
".git/objects/ca/f026e094022f64ae926b50fc12b65edb5fa41a": "2eff94d943e56f9e816ce8bd17630cc4",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/cd/89f5520f2563367a8073af2e69b2eedfa43fb6": "c9cf3b87ddda810de093024e32dbf6ff",
".git/objects/ce/7dd5de05bd425b7841c93be44307f85e99b917": "19b2b0118bbd32ad4865751f7cd850d1",
".git/objects/cf/36f3e42290c423fc298ff8d6010c520eae2c2b": "18e34f96955d741f9322ffec7c111017",
".git/objects/d0/ed535b38f672146a601d4282553caa90b89d11": "0436b0825048c0d8c524ffce463daefd",
".git/objects/d1/b03fd0b13ffa35a193b8b0ee1d565de26d61fd": "b20918d617f0274369e2f413addbff87",
".git/objects/d3/5928b5c681518564a7a62b423c10124cdbca7c": "5ceb03c75aff76007551025714af2007",
".git/objects/d3/ac614e418416f2891cde4b9cb540c4bfe97ff8": "87fe9e0b299af4e0e2f4c308309bbbcb",
".git/objects/d5/92e2234fd5225fc37aeedea48fa44dd441fa95": "32c8290a3d248fcfe88943975ed62c34",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/e836129cc3e13b2036ccbfa1586da76e7d5226": "627a5640c1eee45e5b6a809df83793df",
".git/objects/d9/04b1b4730b40f4aab306ce022b581d86a08a17": "2291732b5ddcddc6f1ed4885fb107614",
".git/objects/d9/a5576d2417182c5ee1780da73831b7d354c16b": "bfd2002f2ed75e6b8ac683ecead6fd4a",
".git/objects/db/f58d906118bd4d3a70c886007193bdb55a9ac7": "e66cf1f7b097dd68927e22ad4d6abf5f",
".git/objects/dd/332dffa5e5f395c1415a0ae0f83282843075b1": "6304f7bdc81cfff43b94acfe580fc04b",
".git/objects/dd/ba5f346556392c975942cbb37a86c103dabf29": "e3f517c8eba4fc649040feda1b131c15",
".git/objects/de/06d618e734283c9a7a7311c4bade67f590ab8c": "ea1ab0424cc638cfd6ac8f22b2e28cd7",
".git/objects/de/613f1aff0e954385f99f9499b6759721fd6fa2": "a72cf3fa3925cd3c26a91130e123d089",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e1/5d44083674f460f4778b2799f280ac05bee4d0": "bb8e4aa3753a890b223e268af0255925",
".git/objects/e2/99297d85dfb933a1b992b601a383a7e209ddf0": "f2071035f93c2384a110822ad1b10b4a",
".git/objects/e3/69be95b8c8377a4fc171fa3fa6e443b455f749": "028ef6d844440d9c96db9663ac90b717",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b4ece22bf69da0680d4e9f1a4df9eeaafbf36a": "f0c578b6c505b6fbdffd00b19a60c2c0",
".git/objects/e5/d64d35bbc560326ffedd4032ad14720718d6af": "e883f94a72e71b009e44e76ce0c8de44",
".git/objects/e6/3bdd0ebcef19fc4cd1a829e90ad7eb984baf4a": "ddd5cf8db8dd812241d5c7b4e0210a3c",
".git/objects/e8/1eed720385c6722ef38d3354aa79151cfb1dcf": "8e7651f49a4de7c8f31adbd64a36d621",
".git/objects/ea/5ea6122883f2bec844b031e94e1eb7da7ca498": "3c3824fca8c3e5cc04ea0fc8ce471cd6",
".git/objects/ea/f15e79f78942e57d9dea712e2a81016767dbfc": "3b4b0cb9ebf43743b0333cc6bf49b440",
".git/objects/eb/0c95047eaa5336b48a03f846271ef1ffd08003": "c1bfe52b7ae6d479c953516add502b59",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d3b7f8edb06fc90f114885e0e1b957bd8a32f9": "47f575937909f1a935a365983cee793f",
".git/objects/ec/b7ad3e9f0e4267e69e805a76b9186a0219fe4a": "0030dc12ec20e964a9cd31b21b2256a7",
".git/objects/ec/e3406cd95dfb5f30ad58da0e4770db39634139": "cd38dce225783f86b7b5a93c3beef442",
".git/objects/ee/29e0c17ff485b16d0dc636ff94b7873199f94e": "6796d68156de1df6ea80608da340ed49",
".git/objects/f0/df74866bfc66f9da4665719c2d34e60ce8b1e0": "3d8e2218034d42a778636fbd7aaf7020",
".git/objects/f2/2ae1f7c2dce3238f1c0609eef81b2662fb17ae": "24cecf97d1918b0ae3f46070d34a3553",
".git/objects/f2/79b0077734b9cc1123f3b7f55cbb2584aab348": "70b85d6a09479baa362d5aa6bddf7d2c",
".git/objects/f2/91ef3ea869faa97212406710f5d4250bbf94ec": "9e4da359b915dba34177e700d174f61d",
".git/objects/f4/aef61d0b368f0ff9badd4f07f15c9592f3714f": "5bbab4a7f86b848a95bffb3f80be99b5",
".git/objects/f5/cf1c22abaf5cc4661f64400605b46518a3ea8f": "20050aeba0dc24eaad239d8a5355a527",
".git/objects/fa/11bfbd6f5e01ced3277886356bae46b5fd2899": "76770e67026f843d098c9db46a685a32",
".git/objects/fa/67712cd87e108df2a7d1bcf121b7e71f1cb2dd": "9df14941c14f98b1c0ea3f888c9ce778",
".git/objects/fa/ce295105d56c8587f521186e43fdfeb2454234": "8b4762db210c4bf113080023aadfc3a3",
".git/objects/fb/acbe93730e51bc80c371259b0ecf81f742d649": "3d817e2599568c501f665cbb6198209e",
".git/objects/fc/acecf4d22ddc7083c1398e0520222354b31ffc": "1b34ed36cf8640fe1f9bbb8cadbe563b",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/554fd700efa12274a133435114c78b8f7dec0e": "8aad70379ffa3681a321b5fafe9fecfd",
".git/objects/ff/5325683ab28c52d6c5ec8096c4cff862a6cf78": "e2014b483f665c15fa1b56b967bfe0c0",
".git/objects/ff/7b14607a04358d2152f6350d7f035e5a277d6e": "54fed583221700956536e21e33373b83",
".git/ORIG_HEAD": "c595a4db30c6f29351f7621f14e12b10",
".git/refs/heads/main": "4697b8ca33f780b4aba39b4c485b327b",
".git/refs/remotes/origin/main": "4697b8ca33f780b4aba39b4c485b327b",
"assets/AssetManifest.json": "3bf5f4184e20d66fd4c6b2fa98e2337b",
"assets/assets/categories/books.jpg": "ebf48038e0bdf59b72180ef65ac472e2",
"assets/assets/categories/business.jpg": "5b672ea0880238e78e1344aeaced4737",
"assets/assets/categories/cinema.jpg": "27c48b3c6b5edd28b8044412db4743c4",
"assets/assets/categories/education.jpg": "5e6ffc1036979419b57397eaf0aebf8a",
"assets/assets/categories/entertainment.jpg": "6a5971d6912a88945f246439bb46fd80",
"assets/assets/categories/health.jpg": "9b7e8ee72b2940ba750181fa6149af88",
"assets/assets/categories/highlights.jpg": "a3446d65e253013d61879a1e07d44fd8",
"assets/assets/categories/lifestyle.jpg": "4e5d0159ca43c96241d3250f2265be42",
"assets/assets/categories/local.jpeg": "b8d2c47a7c5f351ebe2758138ab74306",
"assets/assets/categories/local.jpg": "89f5b3c2ab866f91b1ef52bf083f35fc",
"assets/assets/categories/Politic.png": "2490352070ecadf57dd058bac5870f2f",
"assets/assets/categories/politics.jpeg": "d5fb7140ee7ec4d204249e208fe31432",
"assets/assets/categories/science.jpg": "70e145f32a82138ed13c3e0cb0307014",
"assets/assets/categories/sports.jpg": "a149ca4d2c81a54d62698e57861a2bcc",
"assets/assets/categories/world.jpg": "41c0d196dff3ad9988d8363e83dbb48a",
"assets/assets/cloudy.png": "8961aca51ee3c6a3389f220190adc9fa",
"assets/assets/icons/back.png": "4074b336864c3cbd75b828ed1543c844",
"assets/assets/icons/back2.png": "d8a95d3b707251e069465f1937458910",
"assets/assets/icons/back3.png": "eaf6a4fbc90bb56b8910a61a9388979c",
"assets/assets/icons/bookmark.png": "1a77b82fa5cf6252cb3169e29c613d85",
"assets/assets/icons/cancel.png": "4a43bf7ca4df3a5a72113bbb5baf11cf",
"assets/assets/icons/drawer.jpg": "35bc3f0687ff49a64d5d2479aa031332",
"assets/assets/icons/drawer.png": "dfa900aca8411c58d0fb74b682236328",
"assets/assets/icons/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/icons/home.png": "ba87e2e75b8647d05dbd20a0e43cdff3",
"assets/assets/icons/search.png": "3b32f997928a58ab7af7c883ca0b4f03",
"assets/assets/icons/send.png": "64d360dc6de7f93095ffe32e3f53c804",
"assets/assets/icons/share.png": "9bfb55ad3d67a119e7d6c59d0f2e65d4",
"assets/assets/news.png": "fc17bddf8fffba69d3e5867b932dac21",
"assets/assets/night.png": "4fdeb9006f5a5b8e6e74e9c6ff46468c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "82955669b20fea1c0d102ef5f39e7db0",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
"index.html": "7dcf011fda4288ed3cb2839a44517bfe",
"/": "7dcf011fda4288ed3cb2839a44517bfe",
"main.dart.js": "7710e795a538297621064ae721b90435",
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
