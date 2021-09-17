var movie = function(name, poster, story, producer_img, producer_name, actor1_img, actor1_name, actor2_img, actor2_name, actor3_img, actor3_name){
    this.name = name;
    this.poster = poster;
    this.story = story;
    this.producer_img = producer_img;
    this.producer_name = producer_name;
    this.actor1_img = actor1_img;
    this.actor1_name = actor1_name;
    this.actor2_img = actor2_img;
    this.actor2_name = actor2_name;
    this.actor3_img = actor3_img;
    this.actor3_name = actor3_name;
}

var movie1 = new movie(
    "스파이더맨 : 파 프롬 홈",
    "9일차_영화/스파이더맨_포스터.jpg", 
    "모든 것이 다시 시작된다!\n\'엔드게임\' 이후 변화된 세상.\n스파이더맨 \'피터 파커\'는 학교 친구들과 유럽 여행을 떠나게 된다.\n그런 그의 앞에 '닉 퓨리'가 등장해 도움을 요청하고\n정체불명의 조력자 \'미스테리오\'까지 합류하게 되면서\n전 세계를 위협하는 새로운 빌런 \'엘리멘탈 크리쳐스\'와\n맞서야만 하는 상황에 놓이게 되는데...", 
    "9일차_영화/스파이더맨_감독.jpg",
    "Jon Watts",
    "9일차_영화/스파이더맨_배우1.jpg", 
    "Tom Holland", 
    "9일차_영화/스파이더맨_배우2.jpg", 
    "Zendaya Colerman", 
    "9일차_영화/스파이더맨_배우3.jpg",
    "Jake Gyllenhaal"
)
var movie2 = new movie(
    "터널",
    "9일차_영화/터널_포스터.jpg", 
    "집으로 가는 길, 터널이 무너졌다.\n자동차 영업대리점의 과장 정수(하정우),\n큰 계약 건을 앞두고 들뜬 기분으로 집으로 가던 중\n갑자기 무너져 내린 터널 안에 홀로 갇히고 만다.\n눈에 보이는 것은 거대한 콘크리트 잔해뿐.\n그가 가진 것은 78% 남은 배터리의 휴대폰과 생수 두 병, 그리고 딸의 생일 케이크가 전부다.\n구조대는 오늘도 터널 안으로 들어오지 못했다.", 
    "9일차_영화/터널_감독.jpg",
    "김성훈",
    "9일차_영화/터널_배우1.jpg", 
    "하정우", 
    "9일차_영화/터널_배우2.jpg", 
    "배두나", 
    "9일차_영화/터널_배우3.jpg",
    "오달수"
)
var movie3 = new movie(
    "벼랑 위의 포뇨",
    "9일차_영화/포뇨_포스터.jpg", 
    "모두가 반해버린 사랑스런 소녀가 온다!\n호기심 많은 물고기 소녀 ‘포뇨’는 따분한 바다 생활에 싫증을 느끼고,\n급기야 아빠 몰래 늘 동경하던 육지로 가출을 감행한다.\n해파리를 타고 육지로 올라온 ‘포뇨’는 그물에 휩쓸려 유리병 속에 갇히는 위기에 처하게 되고\n때마침 해변가에 놀러 나온 소년 ‘소스케’의 도움으로 구출된다.\n‘소스케’와의 즐거운 육지 생활도 잠시,\n인간의 모습을 포기하고 바다의 주인이 된 아빠 ‘후지모토’에 의해 결국 ‘포뇨’는 바다로 다시 돌아간다.\n하지만 여동생들의 도움으로 탈출에 성공한 ‘포뇨’는 소녀의 모습으로 변해 거대한 파도와 함께 ‘소스케’에게로 향하는데…\n과연 포뇨는 어려움을 뚫고 소스케를 다시 만날 수 있을 것인가?", 
    "9일차_영화/포뇨_감독.jpg",
    "미야자키 하야오",
    "9일차_영화/포뇨_배우1.jpg", 
    "나라 유리아", 
    "9일차_영화/포뇨_배우2.jpg", 
    "도이 히로키", 
    "9일차_영화/포뇨_배우3.jpg",
    "야마구치 토모코"
)

function updateContents(m){
    var d_name = document.getElementById('movie-name');
    var d_poster = document.getElementById('movie-poster');
    var d_story = document.getElementById('movie-story');
    var d_producer_img = document.getElementById('movie-producer_img');
    var d_producer_name = document.getElementById('movie-producer_name');
    var d_actor1_img = document.getElementById('movie-actor1_img');
    var d_actor1_name = document.getElementById('movie-actor1_name');
    var d_actor2_img = document.getElementById('movie-actor2_img');
    var d_actor2_name = document.getElementById('movie-actor2_name');
    var d_actor3_img = document.getElementById('movie-actor3_img');
    var d_actor3_name = document.getElementById('movie-actor3_name');

    d_name.innerHTML = m.name;
    d_poster.src = m.poster;
    d_story.innerHTML = m.story;
    d_producer_img.src = m.producer_img;
    d_producer_name.innerHTML = m.producer_name;
    d_actor1_img.src = m.actor1_img;
    d_actor1_name.innerHTML = m.actor1_name;
    d_actor2_img.src = m.actor2_img;
    d_actor2_name.innerHTML = m.actor2_name;
    d_actor3_img.src = m.actor3_img;
    d_actor3_name.innerHTML = m.actor3_name;
}


function spidermanOpen(){
    console.log("스파이더맨 오픈");
    updateContents(movie1);
}

function tunnelOpen(){
    console.log("터널 오픈");
    updateContents(movie2);
}

function ponyoOpen(){
    console.log("포뇨 오픈");
    updateContents(movie3);
}