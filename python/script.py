# -*- coding: utf-8 -*-
import os
#当前目录
baseDir = os.path.dirname(os.path.abspath(__file__)).replace('\\','/') + '/'
#更改当前工作目录
os.chdir(baseDir)
with open('data.csv') as f:
    lines = f.readlines()[1:]
content = 'Number f1 f2 f3 emotion[0..5] mood[0..2]\n'
Number = 1
for line in lines:
    line = line.replace('\n','')
    a = float(line.split('\t')[1])
    b = float(line.split('\t')[2])
    c = float(line.split('\t')[3])
    f1 = round((13.0/60)*a-13,2)
    f2 = round((1.0/9) * b,2)
    f3 = round(3.652 * c,2)
    
    if (f1>=4.5 and f1<=5.4) and (f2>=6.6 and f2 <=7.5) and (f3>=3.1 and f3<=5.0):
        Happiness = 1
    else:
        Happiness = 0
    if (f1>=1 and f1<=2.4) and (f2>=4.5 and f2 <=6.5) and (f3>=1.1 and f3<=4.0):
        Sadness = 1
    else:
        Sadness = 0
    if (f1>=5.5 and f1<=6.4) and (f2>=8.1 and f2 <=9.5) and (f3>=0 and f3<=3.0):
        Surprice = 1
    else:
        Surprice = 0
    if (f1>=6.5 and f1<=7.5) and (f2>=7.6 and f2 <=10.5) and (f3>=7.1 and f3<=10):
        Anger = 1
    else:
        Anger = 0
    if (f1>=2.5 and f1<=3.4) and (f2>=6.6 and f2 <=8.5) and (f3>=4.1 and f3<=7.0):
        Disgust = 1
    else:
        Disgust  = 0
    if (f1>=3.5 and f1<=4.4) and (f2>=5.6 and f2 <=7.5) and (f3>=8.1 and f3<=12):
        Fear = 1
    else:
        Fear  = 0
    emotion = [Happiness,Sadness,Surprice,Anger,Disgust,Fear]
    mood = [1,2,3]
    mood[0] = emotion[0]+ 0.5*emotion[2]
    mood[1]= 0.25*emotion[0]+emotion[2]+0.25*emotion[3]
    mood[2]=emotion[1]+0.5*emotion[4]+0.25*emotion[5]
    emotion = [str(x) for x in emotion]
    mood = [str(x) for x in mood]
    content = content + '%s %s %s %s %s %s\n'%(Number,f1,f2,f3,','.join(emotion),','.join(mood))
    Number+=1
with open('phase1.txt','w') as f:
    f.write(content)
    

    