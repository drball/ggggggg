﻿#pragma strict

function StartGame() {
	Application.LoadLevel ("playerSelect");
}

function FacebookBtnPressed() {
	Application.OpenURL("https://www.facebook.com/drball");
}

function RateBtnPressed() {
	Application.OpenURL("https://play.google.com/store/apps/details?id=com.DavidDickBall.RoboSumo");
}

function TwitterBtnPressed() {
	Application.OpenURL("https://www.twitter.com/davidonionball");
	
}
