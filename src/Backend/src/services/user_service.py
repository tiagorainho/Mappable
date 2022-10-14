
# every value bellow the preference value will be included to be used as an object instead of clustered
from .rules import ZoomRules


ROLES = {
    
    "normal":
        ZoomRules(
            preference= {
                14: ["Museum"],
                17: ["ParkingSpot"]
            },
        ),

    "administrative":
        ZoomRules(
            preference= dict(),
        )
}
