<loader-wave>
  <div class="wrapper" style="height:{opts.height};">
    <div class="loading-full">
      <div class="loading-wave" style="height:{opts.height};width:{opts.width};">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
      </div>
    </div>
  </div>
  <style scoped>
    .wrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }
    .loading-full {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      text-align: center;
    }
    .loading-wave {
      margin: 0 auto;
      display: inline-block;
    }
    .loading-wave > div {
      background-color: #1b202c;
      height: 100%;
      width: 10px;
      display: inline-block;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      -moz-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .loading-wave .rect2 {
      -webkit-animation-delay: -1.1s;
      -moz-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .loading-wave .rect3 {
      -webkit-animation-delay: -1s;
      -moz-animation-delay: -1s;
      animation-delay: -1s;
    }
    .loading-wave .rect4 {
      -webkit-animation-delay: -0.9s;
      -moz-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .loading-wave .rect5 {
      -webkit-animation-delay: -0.8s;
      -moz-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    @-webkit-keyframes stretchdelay {
      0%, 40%, 100% {
        -webkit-transform: scaleY(0.4);
      }
      20% {
        -webkit-transform: scaleY(1);
      }
    }
    @-moz-keyframes stretchdelay {
      0%, 40%, 100% {
        -moz-transform: scaleY(0.4);
      }
      20% {
        -moz-transform: scaleY(1);
      }
    }
    @-o-keyframes stretchdelay {
      0%, 40%, 100% {
        -o-transform: scaleY(0.4);
      }
      20% {
        -o-transform: scaleY(1);
      }
    }
    @keyframes stretchdelay {
      0%, 40%, 100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
    .loading-dots {
      margin: 0 auto;
      width: 50px;
      display: inline-block;
    }
    .loading-dots > div {
      width: 8px;
      height: 8px;
      background-color: #383838;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
      -moz-animation: bouncedelay 1.4s infinite ease-in-out;
      animation: bouncedelay 1.4s infinite ease-in-out;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .loading-dots .bounce1 {
      -webkit-animation-delay: -0.32s;
      -webkit-animation-delay: -0.32s;
      -moz-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    .loading-dots .bounce2 {
      -webkit-animation-delay: -0.16s;
      -webkit-animation-delay: -0.16s;
      -moz-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    @-webkit-keyframes bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
      }
    }
    @-moz-keyframes bouncedelay {
      0%, 80%, 100% {
        -moz-transform: scale(0);
      }
      40% {
        -moz-transform: scale(1);
      }
    }
    @-o-keyframes bouncedelay {
      0%, 80%, 100% {
        -o-transform: scale(0);
      }
      40% {
        -o-transform: scale(1);
      }
    }
    @keyframes bouncedelay {
      0%, 80%, 100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
    }
    @-webkit-keyframes pointDown {
      0%, 100% {
        -webkit-transform: translateY(0);
      }
      35% {
        -webkit-transform: translateY(-3px);
      }
      75% {
        -webkit-transform: translateY(5px);
      }
    }
    @-moz-keyframes pointDown {
      0%, 100% {
        -moz-transform: translateY(0);
      }
      35% {
        -moz-transform: translateY(-3px);
      }
      75% {
        -moz-transform: translateY(5px);
      }
    }
    @-o-keyframes pointDown {
      0%, 100% {
        -o-transform: translateY(0);
      }
      35% {
        -o-transform: translateY(-3px);
      }
      75% {
        -o-transform: translateY(5px);
      }
    }
    @keyframes pointDown {
      0%, 100% {
        transform: translateY(0);
      }
      35% {
        transform: translateY(-3px);
      }
      75% {
        transform: translateY(5px);
      }
    }
  </style>
</loader-wave>
