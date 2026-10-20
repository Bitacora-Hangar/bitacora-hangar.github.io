import sys,os,io
from pypdf import PdfReader,PdfWriter
f,prefix,secs=sys.argv[1],sys.argv[2],sys.argv[3]
r=PdfReader(f); n=len(r.pages)
secs=[(int(a.split(':')[0]),a.split(':',1)[1]) for a in secs.split('|')]
def size(a,b):
    w=PdfWriter()
    for i in range(a-1,b): w.add_page(r.pages[i])
    bio=io.BytesIO(); w.write(bio); return bio.getvalue()
starts=[s for s,_ in secs]+[n+1]
groups=[];cur=None
LIM=14_000_000
for k,(s,t) in enumerate(secs):
    e=starts[k+1]-1
    if cur and len(size(cur[0],e))<=LIM: cur=(cur[0],e,cur[2]+[t])
    else:
        if cur: groups.append(cur)
        cur=(s,e,[t])
groups.append(cur)
for i,(a,b,ts) in enumerate(groups,1):
    data=size(a,b)
    if len(data)>LIM:
        # split by pages evenly
        parts=len(data)//LIM+1; step=(b-a+1)//parts+1
        for j in range(parts):
            aa=a+j*step; bb=min(b,aa+step-1)
            d=size(aa,bb); name=f"{prefix}-{i}{chr(97+j)}.pdf"; open(name,"wb").write(d)
            print(name,aa,bb,len(d)//1e6,ts)
    else:
        name=f"{prefix}-{i}.pdf"; open(name,"wb").write(data); print(name,a,b,len(data)//1e6,ts)
