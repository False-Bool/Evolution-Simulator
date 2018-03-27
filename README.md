# Evolution-Simulator
The purpose of this evolution simulator is to help me learn new coding skills and algorithms. The simulator auto generates a new map where creature with very simple traits try to survive for as long as they can for a given period of time. After this period of time, a new generation that went under some minor changes is produced from the older generation. The new generation is then put to the test for the same period of time. After many generation a dominant species should exist and rule this simple world. Do keep in mind that many of these rules are subject to change since only the first phase is finished (map generation).
# Latest Version:
EV_S_1_F

# Time:
A generation in this simulator is equivilant to 45 seconds, every creature can make 1 move/sec where ine move= 1 grid/tile on the map. after the generation's time is over all creature asexually reproduce with slight mutations and are then put to the test once again.
# Fighting:
 when two creature land on the same time or decide to "fight", their fighting strength is a computed probabillity based on their stats. A creature isnt always guranteed to win a fight.
# Map:
The map is randomly generated
# Traits
Every species is given a certain number of points that they allocate into the 6 traits I have given them, the purpose of this simulator is to see which trait allocation is the most successful when it comes to surviving. The allocation of these traits is random.

* Speed: since all creature's move 1 space/tile per seccond, a creature's speed rating only determins the order in which the creatures move. for example, a fast creature will move before a creature with a lower speed rating. This allows for evading stronger creatures, stealing food, hunting creature, etc...

* Sight: creature can only pursue the food they see, the more points allocated into their vision trait the farther away they can see, and the less need for them to explore to find food.

* Size: This trait enhances a creature fighting capabillity by increasing their fighting strength probabillity as mentioned above. eating can enhance size within a generation (the given time period where a creature lives) but only temporarly.

* Stamina: All creatures are able to swim in this simulator, stamina is a measure of how many tiles a creature can swim. It is also used in the probabillity calculation for fighting strength.

* strength:This trait enhances a creature fighting capabillity by increasing their fighting strength probabillity as mentioned above.

* Intelligence: Intelligence is also a random probabillty based on how many points were assigned to the creature's intelligence trait. ever decision a creature takes is prbabillity based. for example, the creature could ask it self whether or not it is a good idea to fight a creature with higher strength or size value than it self. if the creature isn't very intelligent it may get into a losing fight, but at the same time it may also win since even the fight it is probabillity based. Intelligence may or may not be used to calculate fighting strength probabillity.


# Naming the Creatures:
Every generated creature has a species that it belongs to, a creature is a part of the species depending on it two dominant traits and its intelligence level. for example, a creature with dominant speed trait and size trait, with an intelligence percent high 50 will be called: Sp.Si.U . This stands for dominant speed and sight with an upper intelligence limit (higher than 50%).
