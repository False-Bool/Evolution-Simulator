# Made by: obayed elsayed
# Version 1.2, first phase: map generation
# improved tunnels conenction
# started applying Tkinter to interface
# Need to finish applying proper graphics with Tkinter,



import random
from tkinter import *
grid=[]
seed_save='' #gets save string (seed to be added)
length=[25,100] ##### Y,X CAREFUL Nmap_characterT X,Y!!!

rand_val_init=0 # fil value used for seed

#literally map character!
map_character='8'

def init():
	global length
	global grid
	temp=[]
	copy=[]
	for i in range(length[1]):
		temp.append(map_character)
	# I had to make a copy of temp and append that instead, cuz it makes a reference to every single list in grid, as the same list
	# basically changing one list, changes the rest so leave the copy stuff 
	for j in range(length[0]):
		copy=temp.copy()
		grid.append(copy)

def display():
	global grid
	for i in range(len(grid)):
		print(''.join(grid[i]))
# BAD SEED, BIG Smap_characterE find /create a proper noise functiion		
def seed():
#fill value is the chance of the grid either beeing an map_character or a blank
	global grid
	global seed_save
	for i in range(1,length[0]-1):
		for j in range(1,length[1]-1):
			fill_value=random.random()
			if (fill_value>0.55):
				grid[i][j]=' '
	# save section
	for i in range(length[0]):
		seed_save+= ''.join(grid[i])+'\n'
				



def is_empty(y,x):
	if (grid[y][x]==" "):
		return True
	else:
		return False

# cell life rules, 3 neightbours, lives
# if empty gets filled, if 3 neighbours

def count_neighbours(y,x):
	neighbours=0
	if (y==0 or y== length[0]-1 or x==0 or x== length[1]-1):
		return(False)
	if grid[y-1][x]==map_character:
		neighbours+=1
	if grid[y+1][x]==map_character:
		neighbours+=1
	if grid[y][x-1]==map_character:
		neighbours+=1
	if grid[y][x+1]==map_character:
		neighbours+=1
	return neighbours
def count_UP_neighbours(y,x):
	neighbours=0
	if (y==0 or y== length[0]-1 or x==0 or x== length[1]-1):
		return(False)
	if grid[y-1][x]==map_character:
		neighbours+=1
	if grid[y+1][x]==map_character:
		neighbours+=1
	if grid[y][x-1]==map_character:
		neighbours+=1
	if grid[y][x+1]==map_character:
		neighbours+=1
	return neighbours	
def count_side_neighbours(y,x):
	neighbours=0
	if (y==0 or y== length[0]-1 or x==0 or x== length[1]-1):
		return(False)

	if grid[y-1][x-1]==map_character:
		neighbours+=1
	if grid[y-1][x+1]==map_character:
		neighbours+=1
	if grid[y+1][x-1]==map_character:
		neighbours+=1
	if grid[y+1][x+1]==map_character:
		neighbours+=1

	return neighbours
	#for i in range(1,length[0]-1): # y row
	#	for j in range(1,length[1]-1):	# x row
def generate():
	global grid
	for i in range(1,length[0]-1): # y row
		for j in range(1,length[1]-1):	# x row
			if(count_neighbours(i,j)<1):
				if(is_empty(i,j)):
					grid[i][j]=map_character
			else:
				grid[i][j]=" "	
def clean_fill():
	for i in range(1,length[0]-1): # y row
		for j in range(1,length[1]-1):	# x row
			if(count_neighbours(i,j)>=3):
				if(is_empty(i,j)==True):
					grid[i][j]=map_character
def clean_space():
	for i in range(1,length[0]-1): # y row
		for j in range(1,length[1]-1):	# x row
			if(count_neighbours(i,j)<2):
				if(is_empty(i,j)==False):
					grid[i][j]=" "
	
init()
seed()
# main body
display()
for i in range(400):
	#display()
	#print("\n")
	generate()
display()

for i in range(5):
	clean_fill()
	clean_space()

display()
	

# end of main body

def save():
	create_save=open("test.txt","w")
	create_save.write(seed_save)
	create_save.close()
def open_save():
	global save
	open_save=open('test.txt','r')
	save=open_save.readlines()
	open_save.close()
	
	print("Got save successfully")
def present():
	global save
	print(save)
	
def get_save():
	global grid
	grid[:] = []
	for i in range(len(save)):
		grid.append(list(save[i].strip("\n")))
	for i in range(length[0]):
		print(''.join(grid[i]))
	print("\n")
def test():
	print("test")
def gen():
	for i in range(400):
		#display()
		#print("\n")
		generate()
	display()

	for i in range(5):
		clean_fill()
		clean_space()

	display()
window = Tk()

# create a menu
menu = Menu(window)
window.config(menu=menu)

filemenu = Menu(menu)
menu.add_cascade(label="File", menu=filemenu)

filemenu.add_command(label="Save", command=save)
filemenu.add_command(label="open...", command=open_save)
filemenu.add_command(label="Show", command=present)
filemenu.add_command(label="Get", command=get_save)
filemenu.add_command(label="Gen", command=gen)

mainloop()
	
