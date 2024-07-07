class AppConstant {
  // Receiver Address
  static getReceiverWalletAddress() {
    const leaderboardAddresses = [
      "init1qg0dsrl7fmkc9hhexxs65cuvvqazyce6ksv9kz",
      "init1hrx2ssnnlm6altejmnha4sa4v0js69xy3pgnk2",
      "init1h7rtg2xxlhs3z7m8v6uhktfxw8ms3d8dp3ujgk",
      "init13huwckzzj9v84hkhjtj0n6sfdfgpwn7wpegdpl",
      "init1fs0ayfkptlj0w5wr6ayadpm0sh2z22un2h68h8",
      "init16geqhqmjzm6ujwkhhglt9ndlcagvur2lljzcgr",
      "init1clamrnyhqmy7g6zscvfu82323rr3semzvu5295",
      "init1rr5jymzuw38etcal5h4w5tq05krnazpyqtv7gt",
      "init1t9ms5h3kyxsdw77ahfwx67wqfk24yph6q73687",
      "init1vpxa2t2aklatwg7vyy3gdhj0ytv5hz4pesvy0y",
      "init1dnmefxfn44263f676kj2dvk3lmfkykgll2ggda",
      "init1a44uknexsly05tp6ncuxwc7s0z5kd0m929dns5",
      "init1m80yhmclh8gdzjtnw0hv96d328n5jkyc7lk6aw",
      "init136qr4nn3ae47nwx2gydxaf4l8wxya0dmyyg5mt",
      "init1fv40n2t8k9tnwan3kja4nwnpsdk2vl7eq8axfm",
      "init1m9sk8l6d59t2dz6z32tl8h4nm8zt3gdvkpl9s0",
      "init1uh4x9lz05ahcz4h4pd7yv3zpftujjuvj7jznr4",
      "init13qynsuu29e3eh5tzqf4zqmkujqyfn6xeynlqew",
      "init1k83zmkz5th26ts34haspsy0t8e3eamry6n0ul2",
      "init1x0pehqvgctujtu25yyhjsfwqrjfudqvzj4la6r",
      "init1d6dympwjdv53cjcq4ves2x7js3qc6fzd99uq5h",
      "init1wsgxljhjgdqd3948agq5r4v9kygx2g5gl7m446",
      "init1gdaamrn4w97aakhyddn87x76r8e94e2n6p3vww",
      "init1nl0dp95hfalu0mlamg3gxg9m5cxue93sf5whvz",
      "init1wegtr8v2mdc9fxcm2djvjg40zc3va8n93quut7",
      "init1egrxn2hpc68vxnjjp7mjqwt2xa3l3kcf2mgwz6",
      "init1wrrslm7clltvpq0p6h7jnsz5l3udzu848gx5wx",
      "init1d0s3yv9pljtf48ymq47nsxecaarhpq3vyj8w55",
      "init1ep3g3p4uxr3e2wy4j8l8f0g6gqlnmw4c8dt350",
      "init1h9ez4f2e3g5hj8dl7hu3zlhdpn69xel0763xlg",
      "init1lz9eewsa7uudqwzckv8ljcc0ffrkuf93wu07rc",
      "init1qd0zamz50nt47jdqn2fv2mckzzvlfcf3z8xk7c",
      "init1l53f57zrxzcez5zsswzxrczpj62p0tzuvg6qxf",
      "init1damqva33ex9qjldtwzq99s9wjlzq39w3lu9kxn",
      "init1myldqdnu8h3qk8q7xynhguj4kl302mxg64u6e4",
      "init18690n2dynq5tgyv2xwdgqrvxcvzgcp3vg2l8yq",
      "init1fwst0q3jq892v4yp896vkhq5whzm3t9cnqur7s",
      "init1x3h8xegt62crw00h386zq0defja2grnp6cdmul",
      "init1tqtkpnq08l83tf3ru2llgvjecqwa8uf79z754n",
      "init1dlnlyrjvyce238l33w0fvy5yf85ymu2luep4fr",
      "init1u4xm20jzwpg5ulu9nru98xqk0d62grkkg6pw8e",
      "init1hn34sjfedgr4vl8fwelcaawqtam0us8fhjap27",
      "init1rxhtvcaq0d3deww8rh8qguh7nly6r9qeaw26jy",
      "init1l9k6h3n27clrs87uwv0mugl88c5swvecmhgdfz",
      "init10n06z23n44xeaax9fq7yud4sz2wxpspn72gus8",
      "init1wl87xlf6524l5d2rmpz5ccyp2fyjxau65deh8a",
      "init1k4lefdnywlhu8fxcw8836d35vv3m9asxtq85mq",
      "init12k4ct2uk7planfd5fhal6qcsz9kqenkzelxh9d",
      "init1h725swac4us3ceg5kevk6fr4frseplau287exe",
      "init1ccgqkqtelm5mmqxwf2txg8ja9zpprxtr43vdfj",
      "init1z77xdclg39dgacpq3a7tj3s60pkhxezu9skhl2",
      "init1vpsv6r0amwfgemhx97y7hqx2mcul0egjf4jlgy",
      "init1chmeranlw9w695hmt4equ8uxtelqr5040gnc8z",
      "init143plsum8x5z2j665vjngr5x8mh4d8cyp8yvzf6",
      "init1vsf28gawqwywkqfrd94qd9sq946p028aah6zyv",
      "init1h88uy38k7vpqt3ct3wqnmkeh69pf4eau9za02y",
      "init103wz684hkdynqpk54xr37p0hm9km2yt6nns5l9",
      "init1rs5ek7j6xxt5zrkgsc8mxachhzy8ra2fla6cnw",
      "init1wekcesq72jywzwquj5h6zz47d4hd9lwwl49yjg",
      "init1vel9xx0sd03zpqypaklwrnfl2nmemqp9tvz5zj",
      "init1lzy4k38g7x6qycder9fz0t6aqyh6tqd7h5vg3y",
      "init1hmmpff6s7u34l68kzujagegxhrkxysc82amjl8",
      "init1cdwnejn4m0vdfm3c76hs6sdg3a2ssrlv02x8q4",
      "init1cqxx39nq3vx6l34tkklnmsy8ykgf4klust2h7e",
      "init14erfs3v7ke2zazvu0rxqtqu2wvnr62ul5jw5yg",
      "init1kf7fr0zzytyjgfe4ylw3f0lxk8hudcyefzkj96",
      "init17vs44x9ve92h78ky3y5e0t6sqrlv44s0shxrf0",
      "init18xlnkv8nh7qtsc7ypgnr48c593c8ut504msa8q",
      "init17gsfnmmug7tmyk7vwkhjq0f8kmwh76fpjg709f",
      "init106vt7f32hlmyv9pka9y6wkejlzteuf0j2s8lnl",
      "init1auv5cf0s5tv0mu4d9z7y7u0qe6ycgemf5pu858",
      "init1gtykdjluum2erjjq7mk2zu0pyfv7knxjv49jh7",
      "init1czq2ylufg5032fvfg9zstpz79k8uvf2w8z9ngz",
      "init1jr3c7jxs0g785y48j6klpfhqdf074rg488u530",
      "init1svm9243lwuuwzru836efx9wuw895jreas79svh",
      "init15xxdn76uclzrjqdz495dy9y8zlm8tluuet2rx9",
      "init1rrp3l5n02kzx7xpv8cvwflg3trwkurxhe2w0ru",
      "init1femwse4ugmtq20nzdc6h4vs2g0fz6xf7qutj6x",
      "init1ssucjgual7d0f34ra4shmeckk62lzshd7l6p39",
      "init17cfkfjamws5v9rcpu7lvke4vemjn7jdwe8cdr5",
      "init1f4k7a3ljjf9y6505wy4z8zah5aedg4g66rxen3",
      "init1csqvcngd6f6guf3n7c6lntlkfc64jlsql9d3sa",
      "init1s6xcl98m0fpsrv55rpcclrhr9humn4qg02j8ul",
      "init1d7cedku6lmye74q6aj5w6ttg4rgnh0yaku25tz",
      "init1ct8724uymtgkx83xlh3hna24etx643lnardun2",
      "init1ag6ytxdsylvuukzlgjs75gplr0rklnkqdz9303",
      "init18ua67wfyu962zrk9a7y4ss9xua44lh65wz06lk",
      "init1vc9t5qy7649dtcjuxcn79hq52fq7jzq2e0a30y",
      "init1zet5py88l3vaxueguj3zpy2e2djpceuw7ms520",
      "init1j3x8cyxj4u3a5t643k2yhaj0lc38rz4ehg9myg",
      "init1nasarnrwmeepfc0lf3wmk5v37n0nnlymr3ey8r",
      "init1q62y3hsfvkz3s3s4xmnlwq9enxex2xru0muqqu",
      "init1t7h7nhkx5777j56m8vg8etdeen0xup3s06pqjh",
      "init16h39m4f4a53d748rkmlzdcnjw32ctufxe0gkv8",
      "init1wn5ftrrzr6sms4t4rxgr0508kt42jwzy8tdsh0",
      "init1vxurya8t5303t2erymuk7hl789x8awq7pgvumt",
      "init16jfejzm002sv3e2nusufpaev2csrhdj604em8k",
      "init13cedt4fjxkcphn8kp27kgaph3r872qc3jalpa9",
      "init1fjaey7a9q8egz3fvq6e5yex3rxu5lf9s0nqqna",
      "init1mhz3zsg8tg82cc20vtjn2wzdskjlkevuzm8aph",
    ];
    return leaderboardAddresses[
      getRandomInt(0, leaderboardAddresses.length - 1)
    ];
  }

  //module
  static CLAIMPOINTMODULEADDRESS = "0x9065fda28f52bb14ade545411f02e8e07a9cb4ba";
  static TUCANAMODULEADDRESS = "0x3933C6AB1A6F84E9CDA13AE78F389666C9B83E69";
  static TUCANAPERPMODULEADDRESS = "0x298a9dc53eda7750a5683960b01775d3a34ddb5f";
  static TUCANAPOOLMODULEADDRESS =
    "0x8609f642a8ab1c13d661c14d733cab227bba15635a730af2057051b3f2ada3f6";
  static CIVITIAMODULEADDRESS = "0x99132d33b555cd1565c59cee1e0e4ff52fbc7fb7";
  static BRIDGEMODULEADDRESS =
    "0x42cd8467b1c86e59bf319e5664a09b6b5840bb3fac64f5ce690b5041c530565a";

  //liquidity
  static INITIAUSDCLIQUIDITYADDRESS =
    "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d";
  static INITIATIALIQUIDITYADDRESS =
    "0xb134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2";
  static INITIAETHLIQUIDITYADDRESS =
    "0xa2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200";
  static INITIATUCANALIQUIDITYADDRESS =
    "0x6396ff1a2938e726acc101b9c5414b805d9a605c03c8e08324f5c0c8807f7cbc";
  static TUCANAINITIAUSDCLIQUIDITYADDRESS =
    "0x16b6ee2513acbd7f6e2a5c80d4b31d4bd42c4b07dee4b38bbf1db13b303093e1";

  //Pep Position
  static TUCANAINITIAUSDCPOSITIONADDRESS =
    "0x7a7258fd680c6b925713aebe3069c73a5b5dd6a371abf362cc20d145ef4b029b";

  //metadata
  static INITIAMETADATAADDRESS =
    "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9";
  static USDCMETADATAADDRESS =
    "0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609";
  static TIAMETADATAADRESS =
    "0xacceb3b245392afe08346b794cf5c4ff85e7e9a8c82fcaf5112ae9d64ba57ccb";
  static ETHMETADATAADRESS =
    "0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c";
  static TUCMETADATAADRESS =
    "0x2b14e88b06f7eb3001fc6b1eb60802358555a4dfb1a4ed36507309a2d766ce4d";
  static TUCPERPMETADATAADDRESS =
    "0xeb85af3fac00260b3f802aa1b8443da571ab28a823ba4d3c982553b9727625df";

  //validator
  static OMNINODEVALIDATORADDRESS =
    "initvaloper1m07fvq8flvc3ltjlgk30nznfdjf4hx9nwcpdy9";
  static NODESGURUVALIDATORADDRESS =
    "initvaloper1x7j4d9ccds889yxecuylp803d0h6lrfnv30k9y";
}

export { AppConstant };
