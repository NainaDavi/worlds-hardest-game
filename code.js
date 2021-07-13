var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a9cd067b-8b23-4b6b-9ae1-7747cfb40249","89fbfcc9-fad0-4a7f-93b9-61a6c767ff87","7acd9611-e568-47c7-b269-53bd8211a7b5","7d6f53f7-5272-48c7-bdee-4bf738c60bae","f4f378b4-14da-4eb6-895f-7b835f9c2c92","eb71ec21-4d8b-4b84-9a7a-e0125d842e6d","2cf3f715-9b8c-41df-aa89-3ee46e1d673d","2c236477-04a6-4eea-bdcc-1933ebf46f53","05e4147f-cd4f-4724-882c-9c0ad27e0d89","56333845-1ecd-49a5-873e-b4e88f55ed9c","c9472aea-d957-4253-9c54-590ea72dd8b3","d151ddf5-6034-4bb1-b08f-1f165d7f9cd4","9207789c-0fe4-4e58-818d-b649a6f7a2c9"],"propsByKey":{"a9cd067b-8b23-4b6b-9ae1-7747cfb40249":{"name":"snail_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Q4i4dbFJQrn230HqJFJu4LbdheAdddJO/category_animals/snail.png","frameSize":{"x":62,"y":42},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q4i4dbFJQrn230HqJFJu4LbdheAdddJO","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":124,"y":42},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q4i4dbFJQrn230HqJFJu4LbdheAdddJO/category_animals/snail.png"},"89fbfcc9-fad0-4a7f-93b9-61a6c767ff87":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/TCRMW1X4c.nfuT0S4GoXg8epHpNXnNqm/category_faces/pupilportrait_11.png","frameSize":{"x":282,"y":388},"frameCount":1,"looping":true,"frameDelay":3,"version":"TCRMW1X4c.nfuT0S4GoXg8epHpNXnNqm","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TCRMW1X4c.nfuT0S4GoXg8epHpNXnNqm/category_faces/pupilportrait_11.png"},"7acd9611-e568-47c7-b269-53bd8211a7b5":{"name":"enemy4","sourceUrl":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png","frameSize":{"x":394,"y":371},"frameCount":1,"looping":true,"frameDelay":2,"version":"zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":371},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png"},"7d6f53f7-5272-48c7-bdee-4bf738c60bae":{"name":"target","sourceUrl":"assets/v3/animations/q9OSaAjoXhc4KLWLEjsDU_Gtir1gGixNlvz8FZCQjWI/7d6f53f7-5272-48c7-bdee-4bf738c60bae.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"AVFAspq5b1Zp3SW9nWxIATpzANbb2LD0","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/q9OSaAjoXhc4KLWLEjsDU_Gtir1gGixNlvz8FZCQjWI/7d6f53f7-5272-48c7-bdee-4bf738c60bae.png"},"f4f378b4-14da-4eb6-895f-7b835f9c2c92":{"name":"enemy5","sourceUrl":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png","frameSize":{"x":393,"y":240},"frameCount":1,"looping":true,"frameDelay":2,"version":"TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":240},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png"},"eb71ec21-4d8b-4b84-9a7a-e0125d842e6d":{"name":"enemy6","sourceUrl":"assets/api/v1/animation-library/gamelab/Eid4juFajMQCx0dItpnaJIQtX2Q1._7d/category_animals/creature_05.png","frameSize":{"x":392,"y":374},"frameCount":1,"looping":true,"frameDelay":2,"version":"Eid4juFajMQCx0dItpnaJIQtX2Q1._7d","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":374},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Eid4juFajMQCx0dItpnaJIQtX2Q1._7d/category_animals/creature_05.png"},"2cf3f715-9b8c-41df-aa89-3ee46e1d673d":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/JWbMfbWnkErx6Yv8wHqp7kGc4hGT2E4T/category_backgrounds/bg_landscape16.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"JWbMfbWnkErx6Yv8wHqp7kGc4hGT2E4T","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JWbMfbWnkErx6Yv8wHqp7kGc4hGT2E4T/category_backgrounds/bg_landscape16.png"},"2c236477-04a6-4eea-bdcc-1933ebf46f53":{"name":"enemy9","sourceUrl":"assets/api/v1/animation-library/gamelab/0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq/category_animals/creature_10.png","frameSize":{"x":185,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":185,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0mBdF4CIKQ1gd.o4ue064YJMj_2gN4Aq/category_animals/creature_10.png"},"05e4147f-cd4f-4724-882c-9c0ad27e0d89":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/EIwknzsNvY8SfKy0Ojq0X_Xu7Ix_RXJR/category_animals/brown_cat.png","frameSize":{"x":191,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"EIwknzsNvY8SfKy0Ojq0X_Xu7Ix_RXJR","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EIwknzsNvY8SfKy0Ojq0X_Xu7Ix_RXJR/category_animals/brown_cat.png"},"56333845-1ecd-49a5-873e-b4e88f55ed9c":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/FV2Q8anR6u3sdXbNX.MvEmKJQex4ZvPV/category_animals/animalhead_snake_2.png","frameSize":{"x":300,"y":386},"frameCount":1,"looping":true,"frameDelay":2,"version":"FV2Q8anR6u3sdXbNX.MvEmKJQex4ZvPV","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":386},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FV2Q8anR6u3sdXbNX.MvEmKJQex4ZvPV/category_animals/animalhead_snake_2.png"},"c9472aea-d957-4253-9c54-590ea72dd8b3":{"name":"enemy7","sourceUrl":"assets/api/v1/animation-library/gamelab/uKV_jB5Pm4ExAlUVHhzQQCeK.vyxluGA/category_animals/creature_14.png","frameSize":{"x":396,"y":256},"frameCount":1,"looping":true,"frameDelay":2,"version":"uKV_jB5Pm4ExAlUVHhzQQCeK.vyxluGA","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":256},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uKV_jB5Pm4ExAlUVHhzQQCeK.vyxluGA/category_animals/creature_14.png"},"d151ddf5-6034-4bb1-b08f-1f165d7f9cd4":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/kAoR44db1dgeltHCNTVFPZHx0yVhiBww/category_fantasy/rpgcharacter_18.png","frameSize":{"x":212,"y":285},"frameCount":1,"looping":true,"frameDelay":20,"version":"kAoR44db1dgeltHCNTVFPZHx0yVhiBww","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kAoR44db1dgeltHCNTVFPZHx0yVhiBww/category_fantasy/rpgcharacter_18.png"},"9207789c-0fe4-4e58-818d-b649a6f7a2c9":{"name":"enemy8","sourceUrl":"assets/api/v1/animation-library/gamelab/bBLJm5DhYtD1GEPfECkJg_Pkhaw6.ite/category_animals/urchin.png","frameSize":{"x":374,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"bBLJm5DhYtD1GEPfECkJg_Pkhaw6.ite","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":374,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bBLJm5DhYtD1GEPfECkJg_Pkhaw6.ite/category_animals/urchin.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
b.setAnimation("b");
var wall1=createSprite(155,272,300,5);
wall1.shapeColor="black";

var wall2=createSprite(200,390,400,5);
wall2.shapeColor="black";

var wall3=createSprite(6,200,5,400);
wall3.shapeColor="black";

var wall4=createSprite(299,170,5,200);
wall4.shapeColor="black";

var wall5=createSprite(185,73,230,5);
wall5.shapeColor="black";

var wall6=createSprite(393,191,5,400);
wall6.shapeColor="black";

var wall7=createSprite(200,5,400,5);
wall7.shapeColor="black";

var wall8=createSprite(72,137,5,130);
wall8.shapeColor="black";

var wall9=createSprite(150,200,150,5);
wall9.shapeColor="black";

var wall10=createSprite(222,170,5,60);
wall10.shapeColor="black";

var target=createSprite(131,129,100,100);
target.shapeColor="yellow";
target.setAnimation("target");
target.scale=0.2;

var player=createSprite(40,326,20,20);
player.shapeColor="skyblue";
player.setAnimation("player");
player.scale=0.1;

var enemy1=createSprite(112,282,10,10);
enemy1.shapeColor="red";
enemy1.velocityY=3;
enemy1.setAnimation("enemy1");
enemy1.scale=0.1;



var enemy2=createSprite(200,270,10,10);
enemy2.shapeColor="red";
enemy2.velocityY=4;
enemy2.setAnimation("enemy2");
enemy2.scale=0.2;

var enemy4=createSprite(289,369,10,10);
enemy4.shapeColor="red";
enemy4.velocityY=-6;
enemy4.setAnimation("enemy4");
enemy4.scale= 0.1;

var enemy5=createSprite(313,120,10,10);
enemy5.shapeColor="red";
enemy5.velocityX=5;
enemy5.setAnimation("enemy5");
enemy5.scale=0.1;

var enemy6=createSprite(384,195,10,10);
enemy6.shapeColor="red";
enemy6.velocityX=-5;
enemy6.setAnimation("enemy6");
enemy6.scale=0.1;

var enemy7=createSprite(246,8,10,10);
enemy7.shapeColor="red";
enemy7.velocityY=7;
enemy7.setAnimation("enemy7");
enemy7.scale=0.1;

var enemy8=createSprite(120,60,10,10);
enemy8.shapeColor="red";
enemy8.velocityY=6;
enemy8.setAnimation("enemy8");
enemy8.scale=0.1;

var enemy9=createSprite(14,134,10,10);
enemy9.shapeColor="red";
enemy9.velocityX=-6;
enemy9.setAnimation("enemy9");
enemy9.scale=0.1;

var enemy10=createSprite(155,227,10,10);
enemy10.shapeColor="red";
enemy10.velocityX=-8;
enemy10.setAnimation("snail_1");
enemy10.scale=0.5;


var death=0;




function draw() {
 player.bounceOff(wall1);
 player.bounceOff(wall2);
 player.bounceOff(wall3);
 player.bounceOff(wall4);
 player.bounceOff(wall5);
 player.bounceOff(wall6);
 player.bounceOff(wall7);
 player.bounceOff(wall8);
 player.bounceOff(wall9);
 player.bounceOff(wall10);
 player.bounceOff(target);
enemy1.bounceOff(wall1);
enemy1.bounceOff(wall2);
enemy2.bounceOff(wall1);
enemy2.bounceOff(wall2);

enemy4.bounceOff(wall1);
enemy4.bounceOff(wall2);
enemy5.bounceOff(wall4);
enemy5.bounceOff(wall6);
enemy6.bounceOff(wall4);
enemy6.bounceOff(wall6);
enemy7.bounceOff(wall7);
enemy7.bounceOff(wall5);
enemy8.bounceOff(wall7);
enemy8.bounceOff(wall5);
enemy9.bounceOff(wall3);
enemy9.bounceOff(wall8);
enemy10.bounceOff(wall3);
enemy10.bounceOff(wall4);





if (keyDown("left")) {
 player.x=player.x-3;
 
}

if (keyDown("right")) {
  player.x=player.x+3;
 
  
}

if (keyDown("up")) {
  player.y=player.y-3;
  
}

if (keyDown("DOWN")) {
  player.y=player.y+3;
  
}

if (player.isTouching(target)) {
  textSize(45);
  text("you won",200,200);
}
stroke("red");
textSize(15);
text("DEATH:"+death,217,100);


if (player.isTouching(enemy1)||player.isTouching(enemy2)||player.isTouching(enemy4)||player.isTouching(enemy5)||player.isTouching(enemy6)||player.isTouching(enemy7)||player.isTouching(enemy8)||player.isTouching(enemy9)||player.isTouching(enemy10)) {
    playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");

  player.x=40;
  player.y=326;
  death=death+1;
}
stroke("black");
textFont("ITALIC");
textSize(20);
text("TARGET",129,196);
if(player.isTouching(target)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  player.x=200;
  player.y=345;
  target =target+1;
}
textSize(20);
  fill("blue");
  text("targets:"+target,320,350);
  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
