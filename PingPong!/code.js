var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0a7fe22f-fcd5-411e-873b-871167ef5191","33c21bf2-8134-4673-9c53-d81c65fe605d","c3f3ef64-eac9-4719-becd-13ef7560fbd3","8c617cdf-9a0c-4468-af17-037bd8d1009d","93ec9635-cb0b-4e9a-8da6-27f5a1edca08","94a2256a-9f6b-4c2a-97c4-1da56898528a","786f5f33-1f20-4aae-a519-4d1f02b15d19","8f5dd227-8b62-42ce-9179-76d304480899"],"propsByKey":{"0a7fe22f-fcd5-411e-873b-871167ef5191":{"name":"player1","sourceUrl":null,"frameSize":{"x":28,"y":40},"frameCount":4,"looping":true,"frameDelay":4,"version":"_jdT1KMDpHkXvLJzxsqWRUlzJ67eENUi","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":80},"rootRelativePath":"assets/0a7fe22f-fcd5-411e-873b-871167ef5191.png"},"33c21bf2-8134-4673-9c53-d81c65fe605d":{"name":"player2","sourceUrl":null,"frameSize":{"x":28,"y":40},"frameCount":5,"looping":true,"frameDelay":4,"version":"Ddg5pfPTS49QYt3JwetsHCrdNgnbSEPo","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":80},"rootRelativePath":"assets/33c21bf2-8134-4673-9c53-d81c65fe605d.png"},"c3f3ef64-eac9-4719-becd-13ef7560fbd3":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q5POvNk0CZbGe.d85PwtbwDNBHgT.udt","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c3f3ef64-eac9-4719-becd-13ef7560fbd3.png"},"8c617cdf-9a0c-4468-af17-037bd8d1009d":{"name":"play","sourceUrl":null,"frameSize":{"x":110,"y":40},"frameCount":9,"looping":true,"frameDelay":12,"version":"kyNYs8CBVIOThq73ZCgVKX751fjkBtsS","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":200},"rootRelativePath":"assets/8c617cdf-9a0c-4468-af17-037bd8d1009d.png"},"93ec9635-cb0b-4e9a-8da6-27f5a1edca08":{"name":"CLICKSPACE","sourceUrl":null,"frameSize":{"x":112,"y":34},"frameCount":9,"looping":true,"frameDelay":12,"version":"QPdw4LSN_c3VXyr0PeOiPCeRn2sS_baQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":170},"rootRelativePath":"assets/93ec9635-cb0b-4e9a-8da6-27f5a1edca08.png"},"94a2256a-9f6b-4c2a-97c4-1da56898528a":{"name":"playback","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":9,"looping":true,"frameDelay":3,"version":"d5fOAavOoaFJx8gtGIQ3McZ84FL9YDYv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/94a2256a-9f6b-4c2a-97c4-1da56898528a.png"},"786f5f33-1f20-4aae-a519-4d1f02b15d19":{"name":"UIP1","sourceUrl":null,"frameSize":{"x":40,"y":28},"frameCount":2,"looping":true,"frameDelay":20,"version":"HUIC1snP5niCTfJF2Z0P5qrD4B3jYmIV","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":56},"rootRelativePath":"assets/786f5f33-1f20-4aae-a519-4d1f02b15d19.png"},"8f5dd227-8b62-42ce-9179-76d304480899":{"name":"UIP2","sourceUrl":null,"frameSize":{"x":40,"y":28},"frameCount":2,"looping":true,"frameDelay":20,"version":"wnlLGzwCQxukERJ6mdNYlXk8u6BlFU1K","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":56},"rootRelativePath":"assets/8f5dd227-8b62-42ce-9179-76d304480899.png"}}};
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


createEdgeSprites();

//Background
var bg = createSprite(200,200);
bg.setAnimation("background");

    var UIP1 = createSprite(370,20);
    UIP1.setAnimation("UIP1");
    UIP1.alpha=0.3;
    
    var UIP2 = createSprite(30,380);
    UIP2.setAnimation("UIP2");
    UIP2.alpha=0.3;

     var p1 = createSprite(391, 200, 4,40);
  p1.setAnimation("player1");
  p1.visible=false;

  var p2 = createSprite(10, 200, 4,40);
   p2.setAnimation("player2");
   p2.visible=false;

  var ball = createSprite(200,200,3,3);
  ball.shapeColor="#ffffff";
  ball.visible=false;
   ball.bounciness=1.05;
   
   
   var playback = createSprite(200,200);
   playback.setAnimation("playback");
   playback.alpha=0.2;
   
   var play = createSprite(200,200);
   play.setAnimation("play");
   
   var CLISPA = createSprite(200,250);
   CLISPA.setAnimation("CLICKSPACE");
   

function draw() {
  
  
  drawSprites();
  
  //cmds
  if (keyDown("up")){
    p1.y=p1.y-7;
  }
  if (keyDown("down")){
    p1.y=p1.y+7;
  }
  
  p2.y = ball.y
  
  
  
  
  //play
       if (keyDown("space")){
      ball.visible=true;
      p1.visible=true;
      p2.visible=true;
        ball.velocityX=3;
        ball.velocityY=2;
        UIP2.alpha=0.8;
        UIP1.alpha=0.8;
        play.visible=false;
        playback.visible=false;
        CLISPA.visible=false;
       }
       
  //ballbounceoff
  ball.bounceOff(p1);
  ball.bounceOff(p2);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  
  if (ball.isTouching(rightEdge)) {
  UIP2.alpha=0.2;
  UIP1.alpha=0.2;
  play.visible=true;
  playback.visible=true;
  CLISPA.visible=true;  
  ball.velocityX=0;
  ball.velocityY=0;
  ball.x = 200;
  ball.y = 200;
  p1.visible=false;
  p2.visible=false;
  }
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
