/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

import $ from "@modules/jquery";

("use strict");

//------------------------------------
// スムーススクロール
//------------------------------------
$('a[href^="#"]').on('click', function () {
  const speed = 500;
  // アンカーの値取得
  const href = $(this).attr('href');
  // 移動先を取得
  const target = $(href == '#' || href == '' ? 'html' : href);
  // 移動先を数値で取得
  const position = target.offset().top - 50;

  // スムーススクロール
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

//------------------------------------
// ドロワーメニュー
//------------------------------------
$(function () {
  $('#js-drawer').click(function () {
    $('.header, .drawer-nav, .drawer-menu__icon, .drawer-bg').toggleClass('drawer-active');
  });
  $('.js-drawer-nav__link, #js-drawer-bg').click(function () {
    $('.header, .drawer-nav, .drawer-menu__icon, .drawer-bg').removeClass('drawer-active');
  });
});