package com.techstore.backend.domain;

public enum AccountStatus {

    PENDING_VERIFICATION,   //created but not yet verified
    ACTIVE,                 //active and in good standing
    SUSPENDED,              //suspended, possibly due to violations
    DEACTIVATED,            //deactivated,
    BANNED,
    CLOSED                  //closed, possibly at user request
}
