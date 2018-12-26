function Display()
		{
			var t=document.getElementById("tid").value;
			var ans=document.getElementById("ans");
			var tbl="";
			for (var i = 1; i <=10; i++) {
				r=i*t;
				tbl += t+" * "+i+" = "+r+"<br>";
			}
			ans.innerHTML=tbl;
		}