function doGet(e) {
  var ApiToken = "a8db05c0806624fd18681a63932e6281";
  var chatstofinalize = [26082886,26099719,26101701,26111758,26114081,26143859,26146678,26147781,26163166,26172676,26174007,26176480,26177235,26183989,26188783,26190422,26206760,26221120,26225896,26231988,26233167,26234940,26249272,26249718,26253686,26256532,26270099,26271487,26281460,26290174,26292087,26312176,26320760,26323735,26330220,26330842,26339790,26339843,26350195,26357252,26370112,26373508,26377269,26377513,26377886,26379073,26380165,26382036,26388192,26393756,26394937,26408278,26416371,26432106,26438673,26450050,26450456,26462304,26464502,26464545,26465663,26465952,26466848,26466962,26472429,26476795,26485141,26495054,26495777,26496947,26498648,26502978,26503800,26507019,26508469,26516139,26517626,26537456,26538536,26555035,26560286,26567856,26578835,26579424,26581101,26584194,26584584,26591186,26599943,26609894,26616332,26617539,26631594,26648875,26650540,26654870,26674983,26676811,26682679,26693923,26699192,26705684,26709229,26718775,26721603,26725889,26726012,26726264,26727947,26731351,26735151,26741014,26741557,26742302,26742797,26749729,26750256,26755891,26756067,26766381,26767732,26773636,26789461,26801146,26802234,26803721,26806260,26807560,26810216,26810907,26812745,26814267,26816361,26817613,26818784,26828876,26829292,26831502,26838241,26842556,26843753,26862106,26867064,26884477,26886653,26902538,26903806,26906627,26917457,26932874,26941002,26948269,26950006,26955398,26961378,26973739,26984170,26987348,26990886,26993738,27003330,27010664,27017636,27020988,27028927,27034637,27034692,27036312,27041166,27044218,27079126,27080160,27082323,27092306,27092567,27101365,27108715,27118413,27127423,27136073,27139698,27140814,27141254,27143623,27157932,27168787,27168792,27168806,27171172,27172314,27176478,27187661,27194049,27194652,27211341,27233216,27237917,27256415,27261662,27263483,27269151,27270239,27271030,27273200,27274551,27274786,27275258,27275768,27275820,27276247,27278513,27278759,27281464,27282538,27284493,27291732,27299471,27308297,27310581];
  callNextFinalize(0, chatstofinalize, ApiToken);
}

function callNextFinalize(posicao, chatstofinalize, ApiToken) {
  // condição de parada
  if((posicao + 1) > chatstofinalize.length) {
    return false;
  }
  
  var chatId = chatstofinalize[posicao];
  finalizarChat(ApiToken, chatId);
  
  Utilities.sleep(50);
  callNextFinalize((posicao + 1), chatstofinalize, ApiToken);
}  

// Parte de colocar na fila

function doQueue(e) {
  var ApiToken = "4c9ce8c698b79b00b244c3210238eafc";
  var chatstoqueue = [24622178];
  callNextQueue(0, chatstoqueue, ApiToken);
}

function callNextQueue(posicao, chatstoqueue, ApiToken) {
  // condição de parada
  if((posicao + 1) > chatstoqueue.length) {
    return false;
  }
  
  var chatId = chatstoqueue[posicao];
  colocarFila(ApiToken, chatId);
  
  Utilities.sleep(150);
  callNextQueue((posicao + 1), chatstoqueue, ApiToken);
}  


// Parte de executar flow

function executeFlow(e) {
  var ApiToken = "8c218d98f0c4f91fa9fdb121369137ae";
  var chatstoflow = [24898247,24898299,24898372,24898424,24921673,24921943,24922689,24923526,24924664,24924762,24925774,24926259,24926721,24926774,24927026,24927444,24927572,24928696,24930117,24930199,24930387,24931001,24931117,24931867,24932591,24932596,24932640,24932652,24933561,24933615,24935778,24944387,24947748,24947814,24947826,24948325,24949820,24949830,24949852,24949858,24949862,24949884,24950405,24950420,24950760,24950948,24951475,24952228,24954657,24954769,24954891,24954971,24955163,24955168,24955357,24955495,24955585,24955658,24955856,24956399,24956418,24956426,24956558,24957021,24957499,24957720,24957740,24957868,24958381,24958596,24958981,24959789,24960479,24961365,24963364,24963957,24964074,24964667,24965899,24967875,24968340,24968638,24969747,24969864,24970334,24970337,24970359,24970395,24970619,24971068,24971107,24971400,24972110,24972524,24973329,24973450,24976184,24976331,24976632,24977818,24978016,24978442,24979712,24979910,24980213,24980344,24980738,24980808,24980983,24981060,24981339,24981382,24981673,24982215,24982488,24982880,24983919,24984189,24984291,24984427,24984771,24985568,24985588,24985844,24985847,24985921,24986649,24986995,24987584,24987592,24990292,24991169,24992068,24993799,24994121,24995482,24998323,25008226,25008994,25009362,25010389,25010460,25010869,25012521,25013426,25013653,25014218,25014415,25014438,25015110,25015165,25015411,25016108,25016362,25016753,25016862,25017179,25017219,25017279,25017307,25017878,25017905,25017919,25018800,25018888,25018911,25019078,25019743,25019851,25020116,25021611,25022216,25022223,25022681,25023081,25023197,25023255,25023823,25024667,25024936,25025050,25025126,25025182,25025229,25025327,25025440,25025444,25025607,25025771,25026071,25026208,25027802,25027888,25028591,25028807,25028905,25029322,25029695,25030148,25030150,25030384,25032618,25033210,25034227,25034842,25035550,25038140,25038384,25038778,25039116,25039582,25040636,25041596,25041815,25042808,25045231,25047337,25048065,25048071,25055453,25094226,25356897];
  var flowId = 51116;
  callNextFlow(0, chatstoflow, ApiToken, flowId);
}
function callNextFlow(posicao, chatstoflow, ApiToken, flowId) {
  // condição de parada
  if((posicao + 1) > chatstoflow.length) {
    return false;
  }
  
  var chatId = chatstoflow[posicao];
  executarFlow(ApiToken, chatId,flowId);
  
  Utilities.sleep(150);
  callNextFlow((posicao + 1), chatstoflow, ApiToken,flowId);
}  




  