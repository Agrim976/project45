var doctorImage, doctor, doctorCabinGif;
var hospitalImage, hospital, receptionImage;
var patient1,patient1Animation,patient1Image, patient2, patient3, patient4, patient5, patient6,patient7, patient8, patient9, patient10;
var ambulanceImage, ambulance;
var cityAnimation, city;
var playButton, playButtonAnimation;
var guitarist, guitaristImage, music;
var doctorGoImage;
var enterTheHospitalButton, enterTheHospital;
var cloudAnimation, cloud;
var ladyImage, lady;

var visiblity = 0;
var Visiblity = 255;
var visiblity1 = 0;
var gameState = 0;

function preload(){
    
    receptionImage = loadImage("reception.jpg");
    hospitalImage = loadImage("hospital.png");
    ambulanceImage = loadImage("ambulance.png");
    
    patient1Animation = loadAnimation("frame_00_delay-0.04s.png","frame_01_delay-0.04s.png","frame_02_delay-0.04s.png","frame_05_delay-0.04s.png","frame_06_delay-0.04s.png","frame_07_delay-0.04s.png","frame_09_delay-0.04s.png","frame_10_delay-0.04s.png",
    "frame_12_delay-0.04s.png","frame_15_delay-0.04s.png","frame_16_delay-0.04s.png","frame_18_delay-0.04s.png","frame_19_delay-0.04s.png","frame_21_delay-0.04s.png",
    "frame_23_delay-0.04s.png","frame_26_delay-0.04s.png","frame_27_delay-0.04s.png","frame_28_delay-0.04s.png");
    
    patient1Image = loadAnimation("frame_14_delay-0.04s.png");

    patient2= loadImage("patient2.png");
    patient3 = loadImage("patient3.png");
    patient4 = loadImage("patient4.jpg");
    patient5 = loadImage("patient5.jpg");
    patient6 = loadImage("patient6.jpg");
    patient7 = loadImage("patient7.jpg");
    patient8 = loadImage("patient8.jpg");
    patient9 = loadImage("patient9.jpg");
    patient10 = loadImage("patient10.png");

    ladyImage = loadImage("lady.png");

    cloudAnimation = loadAnimation("frame_00_delay-0.13s.png","frame_01_delay-0.13s.png","frame_02_delay-0.13s.png","frame_03_delay-0.13s.png","frame_04_delay-0.13s.png","frame_05_delay-0.13s.png","frame_06_delay-0.13s.png","frame_07_delay-0.13s.png","frame_08_delay-0.13s.png","frame_09_delay-0.13s.png","frame_10_delay-0.13s.png","frame_11_delay-0.13s.png","frame_12_delay-0.13s.png","frame_13_delay-0.13s.png","frame_14_delay-0.13s.png","frame_15_delay-0.13s.png")
    
    cityAnimation = loadAnimation("frame_000_delay-0.03s.png","frame_001_delay-0.03s.png","frame_002_delay-0.03s.png","frame_003_delay-0.03s.png","frame_004_delay-0.03s.png","frame_005_delay-0.03s.png","frame_006_delay-0.03s.png","frame_007_delay-0.03s.png","frame_008_delay-0.03s.png",
    "frame_009_delay-0.03s.png","frame_010_delay-0.03s.png","frame_011_delay-0.03s.png","frame_012_delay-0.03s.png","frame_013_delay-0.03s.png","frame_014_delay-0.03s.png","frame_015_delay-0.03s.png","frame_016_delay-0.03s.png","frame_017_delay-0.03s.png","frame_018_delay-0.03s.png",
    "frame_019_delay-0.03s.png","frame_020_delay-0.03s.png","frame_021_delay-0.03s.png","frame_022_delay-0.03s.png","frame_023_delay-0.03s.png","frame_024_delay-0.03s.png","frame_025_delay-0.03s.png","frame_026_delay-0.03s.png","frame_027_delay-0.03s.png","frame_028_delay-0.03s.png",
    "frame_029_delay-0.03s.png","frame_030_delay-0.03s.png","frame_031_delay-0.03s.png","frame_032_delay-0.03s.png","frame_033_delay-0.03s.png","frame_034_delay-0.03s.png","frame_035_delay-0.03s.png","frame_036_delay-0.03s.png","frame_037_delay-0.03s.png","frame_038_delay-0.03s.png",
    "frame_039_delay-0.03s.png","frame_040_delay-0.03s.png","frame_041_delay-0.03s.png","frame_042_delay-0.03s.png","frame_043_delay-0.03s.png","frame_044_delay-0.03s.png","frame_045_delay-0.03s.png","frame_046_delay-0.03s.png","frame_047_delay-0.03s.png","frame_048_delay-0.03s.png",
    "frame_049_delay-0.03s.png","frame_050_delay-0.03s.png","frame_051_delay-0.03s.png","frame_052_delay-0.03s.png","frame_053_delay-0.03s.png","frame_054_delay-0.03s.png","frame_055_delay-0.03s.png","frame_056_delay-0.03s.png","frame_057_delay-0.03s.png","frame_058_delay-0.03s.png",
    "frame_059_delay-0.03s.png","frame_060_delay-0.03s.png","frame_061_delay-0.03s.png","frame_062_delay-0.03s.png","frame_063_delay-0.03s.png","frame_064_delay-0.03s.png","frame_065_delay-0.03s.png","frame_066_delay-0.03s.png","frame_067_delay-0.03s.png","frame_068_delay-0.03s.png",
    "frame_069_delay-0.03s.png","frame_070_delay-0.03s.png","frame_071_delay-0.03s.png","frame_072_delay-0.03s.png","frame_073_delay-0.03s.png","frame_074_delay-0.03s.png","frame_075_delay-0.03s.png","frame_076_delay-0.03s.png","frame_077_delay-0.03s.png","frame_078_delay-0.03s.png",
    "frame_079_delay-0.03s.png","frame_080_delay-0.03s.png","frame_081_delay-0.03s.png","frame_082_delay-0.03s.png","frame_083_delay-0.03s.png","frame_084_delay-0.03s.png","frame_085_delay-0.03s.png","frame_086_delay-0.03s.png","frame_087_delay-0.03s.png","frame_088_delay-0.03s.png",
    "frame_089_delay-0.03s.png","frame_090_delay-0.03s.png","frame_091_delay-0.03s.png","frame_092_delay-0.03s.png","frame_093_delay-0.03s.png","frame_094_delay-0.03s.png","frame_095_delay-0.03s.png","frame_096_delay-0.03s.png","frame_097_delay-0.03s.png","frame_098_delay-0.03s.png",
    "frame_099_delay-0.03s.png","frame_100_delay-0.03s.png","frame_101_delay-0.03s.png","frame_102_delay-0.03s.png","frame_103_delay-0.03s.png","frame_104_delay-0.03s.png","frame_105_delay-0.03s.png","frame_106_delay-0.03s.png","frame_107_delay-0.03s.png","frame_108_delay-0.03s.png",
    "frame_109_delay-0.03s.png","frame_110_delay-0.03s.png","frame_111_delay-0.03s.png","frame_112_delay-0.03s.png","frame_113_delay-0.03s.png","frame_114_delay-0.03s.png","frame_115_delay-0.03s.png","frame_116_delay-0.03s.png","frame_117_delay-0.03s.png","frame_118_delay-0.03s.png",
    "frame_119_delay-0.03s.png","frame_120_delay-0.03s.png","frame_121_delay-0.03s.png","frame_122_delay-0.03s.png","frame_123_delay-0.03s.png","frame_124_delay-0.03s.png","frame_125_delay-0.03s.png","frame_126_delay-0.03s.png","frame_127_delay-0.03s.png","frame_128_delay-0.03s.png",
    "frame_129_delay-0.03s.png","frame_130_delay-0.03s.png","frame_131_delay-0.03s.png","frame_132_delay-0.03s.png","frame_133_delay-0.03s.png","frame_134_delay-0.03s.png","frame_135_delay-0.03s.png","frame_136_delay-0.03s.png","frame_137_delay-0.03s.png","frame_138_delay-0.03s.png",
    "frame_139_delay-0.03s.png","frame_140_delay-0.03s.png","frame_141_delay-0.03s.png","frame_142_delay-0.03s.png","frame_143_delay-0.03s.png","frame_144_delay-0.03s.png","frame_145_delay-0.03s.png","frame_146_delay-0.03s.png","frame_147_delay-0.03s.png","frame_148_delay-0.03s.png",
    "frame_149_delay-0.03s.png","frame_150_delay-0.03s.png","frame_151_delay-0.03s.png","frame_152_delay-0.03s.png","frame_153_delay-0.03s.png","frame_154_delay-0.03s.png","frame_155_delay-0.03s.png","frame_156_delay-0.03s.png","frame_157_delay-0.03s.png","frame_158_delay-0.03s.png",
    "frame_159_delay-0.03s.png","frame_160_delay-0.03s.png","frame_161_delay-0.03s.png","frame_162_delay-0.03s.png","frame_163_delay-0.03s.png","frame_164_delay-0.03s.png","frame_165_delay-0.03s.png","frame_166_delay-0.03s.png","frame_167_delay-0.03s.png","frame_168_delay-0.03s.png",
    "frame_169_delay-0.03s.png","frame_170_delay-0.03s.png","frame_171_delay-0.03s.png","frame_172_delay-0.03s.png","frame_173_delay-0.03s.png","frame_174_delay-0.03s.png","frame_175_delay-0.03s.png","frame_176_delay-0.03s.png","frame_177_delay-0.03s.png","frame_178_delay-0.03s.png",
    "frame_179_delay-0.03s.png","frame_180_delay-0.03s.png","frame_181_delay-0.03s.png","frame_182_delay-0.03s.png","frame_183_delay-0.03s.png","frame_184_delay-0.03s.png","frame_185_delay-0.03s.png","frame_186_delay-0.03s.png","frame_187_delay-0.03s.png","frame_188_delay-0.03s.png",
    "frame_189_delay-0.03s.png","frame_190_delay-0.03s.png","frame_191_delay-0.03s.png","frame_192_delay-0.03s.png","frame_193_delay-0.03s.png","frame_194_delay-0.03s.png","frame_195_delay-0.03s.png","frame_196_delay-0.03s.png","frame_197_delay-0.03s.png","frame_198_delay-0.03s.png",
    "frame_199_delay-0.03s.png","frame_200_delay-0.03s.png","frame_201_delay-0.03s.png","frame_202_delay-0.03s.png","frame_203_delay-0.03s.png","frame_204_delay-0.03s.png","frame_205_delay-0.03s.png","frame_206_delay-0.03s.png","frame_207_delay-0.03s.png","frame_208_delay-0.03s.png",
    "frame_209_delay-0.03s.png","frame_210_delay-0.03s.png","frame_211_delay-0.03s.png","frame_212_delay-0.03s.png","frame_213_delay-0.03s.png","frame_214_delay-0.03s.png","frame_215_delay-0.03s.png","frame_216_delay-0.03s.png","frame_217_delay-0.03s.png","frame_218_delay-0.03s.png",
    "frame_219_delay-0.03s.png"); 
    
    playButtonAnimation = loadAnimation("play1.png","play2.png","play3.png","play4.png","play5.png","play6.png","play7.png","play8.png","play9.png","play10.png","play11.png","play12.png",);
    
    guitaristAnimation = loadAnimation("guitar0.png","guitar1.png","guitar2.png","guitar3.png","guitar4.png","guitar5.png","guitar6.png","guitar7.png","guitar8.png","guitar9.png","guitar10.png","guitar11.png",
    "guitar12.png","guitar13.png","guitar14.png","guitar15.png","guitar16.png","guitar17.png","guitar18.png","guitar19.png","guitar20.png","guitar21.png","guitar22.png","guitar23.png","guitar24.png","guitar25.png","guitar26.png",
    "guitar27.png","guitar28.png","guitar29.png","guitar30.png","guitar31.png","guitar32.png","guitar33.png","guitar34.png","guitar35.png","guitar36.png","guitar37.png","guitar38.png","guitar39.png","guitar40.png","guitar41.png",
    "guitar42.png","guitar43.png","guitar44.png","guitar45.png","guitar46.png","guitar47.png","guitar48.png","guitar49.png","guitar50.png","guitar51.png","guitar52.png","guitar53.png","guitar54.png","guitar56.png","guitar57.png",
    "guitar58.png","guitar59.png","guitar60.png","guitar61.png","guitar62.png","guitar63.png","guitar64.png","guitar65.png","guitar66.png","guitar67.png","guitar68.png","guitar69.png","guitar70.png","guitar71.png","guitar72.png",
    "guitar73.png","guitar74.png","guitar75.png","guitar76.png","guitar77.png","guitar78.png","guitar79.png","guitar80.png","guitar81.png","guitar82.png","guitar83.png","guitar84.png","guitar85.png","guitar86.png","guitar87.png","guitar88.png","guitar89.png",
    "guitar90.png","guitar91.png","guitar92.png","guitar93.png","guitar94.png","guitar95.png","guitar96.png","guitar97.png","guitar98.png","guitar99.png","guitar100.png","guitar101.png","guitar102.png","guitar103.png","guitar104.png","guitar105.png","guitar106.png","guitar107.png","guitar108.png",
    "guitar109.png","guitar110.png","guitar111.png",
    "guitar112.png","guitar113.png","guitar114.png","guitar115.png","guitar116.png","guitar17.png","guitar118.png","guitar119.png","guitar120.png","guitar121.png","guitar122.png","guitar123.png","guitar124.png","guitar125.png","guitar126.png",
    "guitar27.png","guitar128.png","guitar129.png","guitar130.png","guitar131.png","guitar32.png","guitar133.png","guitar134.png","guitar135.png","guitar136.png","guitar137.png","guitar138.png","guitar139.png","guitar140.png","guitar141.png",
    "guitar142.png","guitar143.png","guitar144.png","guitar145.png","guitar146.png","guitar47.png","guitar148.png","guitar149.png","guitar150.png","guitar151.png","guitar152.png","guitar153.png","guitar154.png","guitar156.png","guitar157.png",
    "guitar158.png","guitar159.png","guitar160.png","guitar161.png","guitar162.png","guitar63.png","guitar164.png","guitar165.png","guitar166.png","guitar167.png","guitar168.png","guitar169.png","guitar170.png","guitar171.png","guitar172.png",
    "guitar173.png","guitar174.png","guitar175.png","guitar176.png","guitar177.png","guitar78.png","guitar179.png","guitar180.png","guitar181.png","guitar182.png","guitar183.png","guitar184.png","guitar185.png","guitar186.png","guitar187.png","guitar188.png","guitar189.png",
    "guitar190.png","guitar191.png","guitar192.png","guitar193.png","guitar194.png","guitar95.png","guitar196.png","guitar197.png","guitar198.png","guitar199.png","guitar200.png","guitar201.png");

    music = loadSound("sound1.mp3");

    doctorGoImage = loadImage("doctorgo.png");

    enterTheHospitalButton = loadImage("enterthehospital.png");

}

function setup(){
    createCanvas(800,600);

    city = createSprite(400,300);
    city.addAnimation("city",cityAnimation);

    playButton = createSprite(400,300);
    playButton.addAnimation("play",playButtonAnimation);
    playButton.visible = false;

    guitarist = createSprite(600,450);
    guitarist.addAnimation("guitar",guitaristAnimation);
    guitarist.scale = 0.2;

    enterTheHospital = createSprite(400,300);
    enterTheHospital.addImage(enterTheHospitalButton);
    enterTheHospital.scale = 0.6;
    enterTheHospital.visible = false;

    patient1 = createSprite(810,305);
    patient1.addAnimation("walk", patient1Animation);
    patient1.addAnimation("stop",patient1Image);
    patient1.scale = 0.5;
    patient1.visible = false;

    lady = createSprite(100,270);
    lady.addImage(ladyImage);
    lady.scale = 0.5;
    lady.visible = false;

    cloud = createSprite(180,200);
    cloud.addAnimation("cloud",cloudAnimation);
    cloud.scale = 0.3;
    cloud.visible = false;

    music.loop();

}

function draw(){
    background("lightblue");

    if(Visiblity<=0 && gameState === 0){
        playButton.visible = true;
    }

    if(mousePressedOver(playButton) && gameState===0 && Visiblity<=0){
        gameState = 1;
        playButton.visible = false;
           
    }

    if(gameState === 1 && city.scale > 0){
        city.scale = city.scale - 0.01;
        for(var i = 20;i <= 360; i = i + 20){
            city.rotation = i;
            if(i > 360){
                i = 20;
            }
        }

    }

    if(gameState === 1 && city.scale < 0){
        enterTheHospital.visible = true;

        if(mousePressedOver(enterTheHospital) && gameState===1){
            enterTheHospital.visible = false;
            gameState = 2;
        }

    }
    
    if(gameState === 1){
        push();
        visiblity = visiblity + 5;
        tint(255,visiblity);
        imageMode(CENTER);
        image(hospitalImage,400,300,800,600);
        pop();

        guitarist.visible = false;
    }

    if(gameState === 2){

        visiblity1 = visiblity1 + 5;
        push();
        tint(255,visiblity1);
        imageMode(CENTER);
        image(receptionImage,400,300, 800, 600);
        pop(); 

        patient1.visible = true;
        patient1.velocityX = -2;

        lady.visible = true;
        
    }

    drawSprites();

    if(gameState === 2 && patient1.x <= 190){
        patient1.velocityX = 0;
        patient1.changeAnimation("stop", patient1Image);

        cloud.visible = true;

        var count = frameCount/8;
        console.log(count);

        if(count > 100){
            
            cloud.x = 260;
            cloud.y = 200;

            textSize(15);
            fill("lightblue");
            text("I want to meet the doctor.",200,210);

        }
        else{
            textSize(15);
            fill("lightblue");
            text("Welcome!",140,190); 
            text(" How may I help you?",110,210);
            
        }
        
    }

    Visiblity = Visiblity-1 ;

    push();
    tint(255,Visiblity);
    imageMode(CENTER);
    image(doctorGoImage,400,300);
    pop();

 
}