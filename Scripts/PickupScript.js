﻿#pragma strict
/* ====================================================
For a collectable object which comes back later
======================================================= */

private var gameController : GameControllerScript;
private var pickupsController : PickupsController;
private var isCollectable : boolean = true;

public var theParticle : GameObject;
public var vfxObj : GameObject;
//private var collectionSfx : AudioSource;


function Start () {
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
	pickupsController = GameObject.Find("GameController").GetComponent.<PickupsController>();
	
	
//	collectionSfx = GetComponent.<AudioSource>();

	NewPickup ();

}

function NewPickup () {

	vfxObj.SetActive(true);
	
	//--come back and blink for a bit
	
	var blinkingAmt : int = 0;
	
	while(blinkingAmt < 8) {
        yield WaitForSeconds(0.04);
        vfxObj.GetComponent.<Renderer>().enabled = !vfxObj.GetComponent.<Renderer>().enabled;
        blinkingAmt++;
    }
    vfxObj.GetComponent.<Renderer>().enabled = true;
    isCollectable = true;
}


function OnTriggerEnter(other: Collider) 
{
	//--when player touches pickup
	if (other.tag == "Player" && isCollectable)
	{
		Debug.Log("pickyup touching player");
//	    collectionSfx.Play();
	        
		var collidingPlayer : PlayerAbilityScript = other.gameObject.GetComponent.<PlayerAbilityScript>();
				
		if(collidingPlayer != null)
        {   
            collidingPlayer.ActivateAbility();
        }
		
		//--destory pickup, but schedule a new one
	    vfxObj.SetActive(false);
	    isCollectable = false;
	    theParticle.GetComponent.<ParticleSystem>().emissionRate = 0;
	    
	    yield WaitForSeconds (3);
	    
	    Destroy(gameObject);

		pickupsController.SchedulePickup();
	    
	}

}


