
var app = angular.module("assign_8", []);
// create controller for selecting option


app.controller('myCtrl', function($scope) {

  $scope.absolutefirst = true;
  $scope.man = false;
  $scope.woman = false;
  $scope.button1show = false;
  $scope.button2show = false;

  $scope.vtrue = false;
  $scope.vtrue2 = false;

  $scope.opt1 = false;
  $scope.opt2 = false;
  $scope.opt3 = false;
  $scope.opt4 = false;
  $scope.opt5 = false;
  $scope.opt6 = false;

  $scope.solutions1 = false;
  $scope.solutions2 = false;
  $scope.solutions3 = false;
  $scope.solutions4 = false;
  $scope.solutions5 = false;

  $scope.solu1p1 = false;
  $scope.solu2p1 = false;
  $scope.solu3p1 = false;
  $scope.solu1p2 = false;
  $scope.solu4p2 = false;
  $scope.solu3p2 = false;
  $scope.solu4p3 = false;
  $scope.solu1p4 = false;
  $scope.solu2p4 = false;
  $scope.solu4p4 = false;
  $scope.solu3p4 = false;
  $scope.solu2p5 = false;
  $scope.solu5p5 = false;
  $scope.testimonials = false;


  // vvv don't know if we need these vvv
  $scope.solu4 = false;
  $scope.solu5 = false;

  $scope.MyVid1 = false;
  $scope.MyVid2 = false;
  $scope.MyVid3 = false;
  $scope.MyVid4 = false;
  $scope.MyVid5 = false;
  $scope.MyVid6 = false;



  // attempting to make function with two params

  $scope.first = function() {
    $scope.absolutefirst = false;
    $scope.vtrue = true;
  };


  $scope.select = function(gender1, gender2) {
    $scope[gender1] = true;
    $scope[gender2] = false;
    console.log('man:', $scope.man);
    console.log('woman:', $scope.woman);

    // check if man or woman is true; if so, make button clickable
    if ($scope.man == true || $scope.woman == true) {
      $scope.button1show = true;
    };
  };

  $scope.firstsubmit = function() {
    $scope.vtrue = false;
    $scope.vtrue2 = true;
  };

  // attempting the select function for the second page
  $scope.select2 = function(num1, num2, num3, num4, num5, num6) {

      $scope[num1] = true;
      $scope[num2] = false;
      $scope[num3] = false;
      $scope[num4] = false;
      $scope[num5] = false;
      $scope[num6] = false;

      console.log ("option 1:", $scope.opt1);
      console.log ("option 2:", $scope.opt2);
      console.log ("option 3:", $scope.opt3);
      console.log ("option 4:", $scope.opt4);
      console.log ("option 5:", $scope.opt5);
      console.log ("option 6:", $scope.opt6);

      if ($scope.opt1 == true || $scope.opt2 == true || $scope.opt3 == true || $scope.opt4 == true || $scope.opt5 == true || $scope.opt6 == true) {
        $scope.button2show = true;
      };
  };

// treatment solution page 1
  $scope.select3 = function(a, b, c) {
    $scope[a] = true;
    $scope[b] = false;
    $scope[c] = false;

    $scope.solutions1 = false;

    console.log("solution a:", $scope.solu1p1);
    console.log("solution b:", $scope.solu2p1);
    console.log("solution c:", $scope.solu3p1);
  };

  $scope.back1 = function() {
      $scope.solu1p1 = false;
      $scope.solu2p1 = false;
      $scope.solu3p1 = false;
      $scope.solutions1 = true;
  };

  $scope.select4 = function(a, b, c) {
    $scope[a] = true;
    $scope[b] = false;
    $scope[c] = false;

    $scope.solutions2 = false;

    console.log("solution a:", $scope.solu1p2);
    console.log("solution b:", $scope.solu4p2);
    console.log("solution c:", $scope.solu3p2);
  }

  $scope.back2 = function() {
    $scope.solu1p2 = false;
    $scope.solu4p2 = false;
    $scope.solu3p2 = false;
    $scope.solutions2 = true;
  };

  $scope.select5 = function() {

    $scope.solu4p3 = true;
    $scope.solutions3 = false;
  };

  $scope.back3 = function() {
    $scope.solu4p3 = false;
    $scope.solutions3 = true;
  };

  $scope.select6 = function(a, b, c, d) {
    $scope[a] = true;
    $scope[b] = false;
    $scope[c] = false;
    $scope[d] = false;

    $scope.solutions4 = false;

    // console.log($scope.solu1p2, $scope.solu2p2, $scope.solu4p2, $scope.solu3p2)
  };

  $scope.back4 = function() {
    $scope.solu1p4 = false;
    $scope.solu2p4 = false;
    $scope.solu4p4 = false;
    $scope.solu3p4 = false;
    $scope.solutions4 = true;
  };

  $scope.select7 = function(a, b) {
    $scope[a] = true;
    $scope[b] = false;

    $scope.solutions5 = false;

    console.log("wigs: " + $scope.solu5p5 + ", ", "scalp wellness: " +  $scope.solu2p5);
  };

  $scope.back5 = function() {
    $scope.solutions5 = true;
    $scope.solu5p5 = false;
    $scope.solu2p5 = false;
  };

  $scope.secondsubmit = function() {
    // console.log("message recieved");
    $scope.vtrue2 = false;
    // console.log($scope.vtrue2);
    if ($scope.opt1 == true || $scope.opt5 == true) {
      $scope.solutions1 = true;
    } else if ($scope.opt2 == true) {
      $scope.solutions2 = true;
    } else if ($scope.opt3 == true) {
      $scope.solutions3 = true;
    } else if ($scope.opt4 == true) {
      $scope.solutions4 = true;
    } else if ($scope.opt6 == true) {
      $scope.solutions5 = true;
    };
  };

  $scope.reset = function() {

    $scope.absolutefirst = true;
    $scope.man = false;
    $scope.woman = false;
    $scope.button1show = false;
    $scope.button2show = false;

    $scope.vtrue = false;
    $scope.vtrue2 = false;

    $scope.opt1 = false;
    $scope.opt2 = false;
    $scope.opt3 = false;
    $scope.opt4 = false;
    $scope.opt5 = false;
    $scope.opt6 = false;

    $scope.solutions1 = false;
    $scope.solutions2 = false;
    $scope.solutions3 = false;
    $scope.solutions4 = false;
    $scope.solutions5 = false;

    $scope.solu1p1 = false;
    $scope.solu2p1 = false;
    $scope.solu3p1 = false;
    $scope.solu1p2 = false;
    $scope.solu4p2 = false;
    $scope.solu3p2 = false;
    $scope.solu4p3 = false;
    $scope.solu1p4 = false;
    $scope.solu2p4 = false;
    $scope.solu4p4 = false;
    $scope.solu3p4 = false;
    $scope.solu2p5 = false;
    $scope.solu5p5 = false;
    $scope.testimonials = false;
    $scope.myVid1 = false;
    $scope.myVid2 = false;
    $scope.myVid3 = false;
    $scope.myVid4 = false;
    $scope.myVid5 = false;
    $scope.myVid6 = false;
  };

  $scope.testi = function() {

    $scope.reset();
    $scope.absolutefirst = false;
    $scope.testimonials = true;
    console.log($scope.testimonials, $scope.solu2p5);
    $scope.myVid1 = true;


    var vid = document.getElementById("myVid1");
    vid.play();
    prevVid = vid;

    // if (vid.autoplay = true) {
    //   console.log("It's true, I knew it!")
    // }
  };


  $scope.videodb = [
    {
      name:'first video',
      url:'videos/1.mp4',
      vidKey:'a',
      idName:'myVid1',
      poster:'images/1.jpg'
    },
    {
      name:'first video',
      url:'videos/2.mp4',
      vidKey:'b',
      idName:'myVid2',
      poster:'images/2.jpg'
    },
    {
      name:'first video',
      url:'videos/3.mp4',
      vidKey:'c',
      idName:'myVid3',
      poster:'images/3.jpg'
    },
    {
      name:'first video',
      url:'videos/4.mp4',
      vidKey:'d',
      idName:'myVid4',
      poster:'images/4.jpg'
    },
    {
      name:'first video',
      url:'videos/5.mp4',
      vidKey:'e',
      idName:'myVid5',
      poster:'images/5.jpg'
    },
    {
      name:'first video',
      url:'videos/6.mp4',
      vidKey:'f',
      idName:'myVid6',
      poster:'images/6.jpg'
    }
  ];
  $scope.selectedVid = 'a';

  $scope.hidevid = function(a, b, c, d, e, f) {
    $scope[a] = true;
    $scope[b] = false;
    $scope[c] = false;
    $scope[d] = false;
    $scope[e] = false;
    $scope[f] = false;

    console.log("1: " + $scope.myVid1,"2: " + $scope.myVid2, $scope.myVid3, $scope.myVid4, $scope.myVid5, $scope.myVid6);
  }

  var prevVid;
  $scope.showVid = function(val) {
    var thisElement = document.getElementById(val.idName);
    thisElement.currentTime = 0;
    if(prevVid) prevVid.pause();
    $scope.selectedVid = val.vidKey;
    thisElement.play();
    prevVid = thisElement;
  }
  
});


