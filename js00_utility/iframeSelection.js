function disableAllButtons()
{
  selectDrawElemDiv.style.visibility="hidden"
    openAddComponentButton.disabled=true
    openAddSchematicButton.disabled=true
    openAddMoleculeButton.disabled=true
    openAddCircleButton.disabled=true
    openAddArcButton.disabled=true
    openAddIconButton.disabled=true
    openAddImageButton.disabled=true
    openAddGraphButton.disabled=true
    openAddChartButton.disabled=true


    openAddEllipseButton.disabled=true
    openAddRectButton.disabled=true
    openAddBGimageButton.disabled=true
    openAddTextButton.disabled=true
    openAddPathButton.disabled=true
    openAddSymbolButton.disabled=true
    openAddPolygonButton.disabled=true
    openAddArcButton.disabled=true

    openAddTextureButton.disabled=true
    openAddGradientButton.disabled=true
    getComponentLibraryButton.disabled=true
    getSchematicLibraryButton.disabled=true

}
function enableAllButtons()
{

  selectDrawElemDiv.style.visibility="visible"

    openAddComponentButton.disabled=false
    openAddSchematicButton.disabled=false
    openAddMoleculeButton.disabled=false
    openAddCircleButton.disabled=false
    openAddArcButton.disabled=false
    openAddIconButton.disabled=false
    openAddImageButton.disabled=false
    openAddGraphButton.disabled=false
    openAddChartButton.disabled=false

    openAddEllipseButton.disabled=false
    openAddRectButton.disabled=false
    openAddBGimageButton.disabled=false
    openAddTextButton.disabled=false
    openAddPathButton.disabled=false
    openAddSymbolButton.disabled=false
    openAddPolygonButton.disabled=false
    openAddArcButton.disabled=false

    openAddTextureButton.disabled=false
    openAddGradientButton.disabled=false
       getComponentLibraryButton.disabled=false
       getSchematicLibraryButton.disabled=false


    openAddComponentButton.style.borderColor=""
    openAddSchematicButton.style.borderColor=""
    openAddMoleculeButton.style.borderColor=""
    openAddCircleButton.style.borderColor=""
    openAddArcButton.style.borderColor=""
    openAddIconButton.style.borderColor=""
    openAddImageButton.style.borderColor=""
    openAddChartButton.style.borderColor=""
    openAddGraphButton.style.borderColor=""

    openAddEllipseButton.style.borderColor=""
    openAddRectButton.style.borderColor=""
    openAddBGimageButton.style.borderColor=""



    openAddTextButton.style.borderColor="" 
    openAddPathButton.style.borderColor="" 
    openAddSymbolButton.style.borderColor="" 
    openAddPolygonButton.style.borderColor=""
    openAddArcButton.style.borderColor=""

    openAddTextureButton.style.borderColor=""
    openAddGradientButton.style.borderColor=""
       getComponentLibraryButton.style.borderColor=""
       getSchematicLibraryButton.style.borderColor=""

    if(svgSaveDiv.style.display!="none")
        showSaveSVG()


}


function openAddSymbolDraw()
{
    if(addElemSymbolLoad==true)
        startSymbolDraw()

        openIframe("AddElem", "addElemSymbol", 0)
        mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddSymbolButton.style.borderStyle = "inset"
}

function openAddArcDraw()
{
    if(addElemArcLoad==true)
        startArcDraw()

        openIframe("AddElem", "addElemArc", 0)
        mySVG.setAttribute("onclick", "placeDrawArc(event)")

        openAddArcButton.style.borderStyle = "inset"
}






function openAddComponentDraw()
{
    if(addElemComponentLoad==true)
    {
         startComponentDraw()
          addElemComponentCw.sendComponentMessageSpan.innerHTML=""
          addElemComponentCw.componentCategorySelect.selectedIndex=0
          addElemComponentCw.myComponentTitleValue.value=""
          addElemComponentCw.myComponentDescriptionValue.value=""
          addElemComponentCw.saveToLibraryDiv.style.opacity=.5
    }


        openIframe("AddElem", "addElemComponent", 0)
       // mySVG.setAttribute("onclick", "plantComponent(event)")

        openAddComponentButton.style.borderStyle = "inset"
}
function openAddSchematicDraw()
{
    if(addElemSchematicLoad==true)
    {
         startSchematicDraw()
          addElemSchematicCw.sendSchematicMessageSpan.innerHTML=""
          addElemSchematicCw.schematicCategorySelect.selectedIndex=0
          addElemSchematicCw.mySchematicTitleValue.value=""

          addElemSchematicCw.saveToLibraryDiv.style.opacity=.5
    }


        openIframe("AddElem", "addElemSchematic", 0)
       // mySVG.setAttribute("onclick", "plantSchematic(event)")

        openAddSchematicButton.style.borderStyle = "inset"
}
function openAddMoleculeDraw()
{
    if(addElemMoleculeLoad==true)
    {
         startMoleculeDraw()

    }


        openIframe("AddElem", "addElemMolecule", 0)
       // mySVG.setAttribute("onclick", "plantMolecule(event)")

        openAddMoleculeButton.style.borderStyle = "inset"
}



function openAddIconDraw()
{
    if(addElemIconLoad==true)
        startIconDraw()

        openIframe("AddElem", "addElemIcon", 0)
        mySVG.setAttribute("onclick", "plantIcon(event)")

        openAddIconButton.style.borderStyle = "inset"

}


function openAddImageDraw()
{
    if(addElemImageLoad==true)
        startImageDraw()

        openIframe("AddElem", "addElemImage", 0)
        mySVG.setAttribute("onclick", "placeDrawImage()")

        openAddImageButton.style.borderStyle = "inset"

}

function openAddChartDraw()
{
    if(addElemChartLoad==true)
        startChartDraw()

        openIframe("AddElem", "addElemChart", 0)
        mySVG.setAttribute("onclick", "placeDrawChart()")

        openAddChartButton.style.borderStyle = "inset"

}


function openAddGraphDraw()
{
    if(addElemGraphLoad==true)
        startGraphDraw()

        openIframe("AddElem", "addElemGraph", 0)
        mySVG.setAttribute("onclick", "placeDrawGraph()")

        openAddGraphButton.style.borderStyle = "inset"

}



function openAddTexture()
{
    if(addElemTextureLoad==true)
        startTextureDraw()

        openIframe("AddElem", "addElemTexture", 0)
       // mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddTextureButton.style.borderStyle = "inset"
}


function openAddBGimage()
{
   if(addElemBGimageLoad==true)
       startBGimageDraw()
    if(document.getElementById(DrawBGimageEditId))
    {   var cw = addElemBGimageCw
        cw.editTemplateCheckDiv.style.visibility="visible"


    }

        openIframe("AddElem", "addElemBGimage", 0)
       // mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddBGimageButton.style.borderStyle = "inset"
}

function openAddGradient()
{
    if(addElemGradientLoad==true)
        startGradientDraw()

        openIframe("AddElem", "addElemGradient", 0)
       // mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddGradientButton.style.borderStyle = "inset"
}






function openAddCircleDraw()
{
    if(addElemCircleLoad==true)
        startCircleDraw()

        openIframe("AddElem", "addElemCircle", 0)

        openAddCircleButton.style.borderStyle = "inset"
}


function openAddEllipseDraw()
{
    if(addElemEllipseLoad==true)
        startEllipseDraw()

        openIframe("AddElem", "addElemEllipse", 0)

        openAddEllipseButton.style.borderStyle = "inset"
}

function openAddPolygonDraw()
{
    if(addElemPolygonLoad==true)
        startPolygonDraw()

        openIframe("AddElem", "addElemPolygon", 0)

        openAddPolygonButton.style.borderStyle = "inset"
}


function openAddRectDraw()
{
    if(addElemRectLoad==true)
        startRectDraw()

        openIframe("AddElem", "addElemRect", 0)

        openAddRectButton.style.borderStyle = "inset"
}

function openAddTextDraw()
{
    if(addElemTextLoad==true)
        startTextDraw()
        openIframe("AddElem", "addElemText", 0)

        openAddTextButton.style.borderStyle = "inset"

}
function openAddPathDraw()
{

    if(addElemPathLoad==false)
        openIframe("AddElem", "addElemPath", 0)
        else
        {
            openIframe("AddElem", "addElemPath", 0)
            startPathDraw()
        }

        openAddPathButton.style.borderStyle = "inset"

}

var AddElemOpen = false //--true if any addElem Frame is viz=true
function isAddElemOpen() //---called from iframeSelection.js---
{
    AddElemOpen = false

    if(editElemComponentViz==true)AddElemOpen = true;
    if(editElemSchematicViz==true)AddElemOpen = true;
    if(addElemMoleculeViz==true)AddElemOpen = true;
    if(addElemTessellateViz==true)AddElemOpen = true;
    if(editElemIsaViz==true)AddElemOpen = true;
    if(addElemComponentViz==true)AddElemOpen = true;
    if(addElemSchematicViz==true)AddElemOpen = true;
    if(addElemTextViz==true)AddElemOpen = true;
    if(addElemCircleViz==true)AddElemOpen = true;
    if(addElemIconViz==true)AddElemOpen = true;
    if(addElemImageViz==true)AddElemOpen = true;
    if(addElemChartViz==true)AddElemOpen = true;
    if(addElemGraphViz==true)AddElemOpen = true;

    if(addElemEllipseViz==true)AddElemOpen = true;
    if(addElemRectViz==true)AddElemOpen = true;
    if(addElemTextViz==true)AddElemOpen = true;
    if(addElemSymbolViz==true)AddElemOpen = true;
    if(addElemTextureViz==true)AddElemOpen = true;
    if(addElemGradientViz==true)AddElemOpen = true;
    if(addElemPolygonViz==true)AddElemOpen = true;
    if(addElemArcViz==true)AddElemOpen = true;

}

function openIframe(Dir, name, left)
{
    if(ZoomDrawing==false)
    {
            closeAllFrames()
            disableAllButtons()
           hideAllHelps()   
            var top = 50

            var fName = eval(name+"Load")
            var myFrame = document.getElementById(name+'Frame')
            var myDiv = d3.select("#"+name+"FrameDiv")

            if(fName==false)
            {
                eval(name+"Load=true")
                myFrame.src = Dir+"/"+name+".htm";
                eval(name+"Cw=document.getElementById(name+'Frame').contentWindow")
            }
            else
            {

                var height = myFrame.scrollHeight

            }
            myFrame.style.overflow = "hidden"

            myDiv.transition().duration(800).style("height", height+"px")

            eval(name+"Viz=true")

            myDiv.style("visibility", "visible")
            myDiv.style("left", left+"px")
            myDiv.style("top", top+"px")

            if(name=="addElemRect")
                startRectDraw()
                if(name=="addElemCircle")
                startCircleDraw()

                if(name=="addElemText")
                startTextDraw()
    }
}

//---fired from iframe onload----
function sizeFrame(name, width, height)
{
    var myFrame = document.getElementById(name+'Frame')
    var myDiv = d3.select("#"+name+"FrameDiv")

    myFrame.style.width = width+"px"
    myFrame.style.height = height+"px"

    myDiv.style("width", width+"px")
    myDiv.transition().duration(800).style("height", height+"px")

}
//---X button in iframe---
function closeIframe(name)
{

    mySVG.removeAttribute("onclick")



    openAddComponentButton.style.borderStyle = ""
    openAddSchematicButton.style.borderStyle = ""
    openAddMoleculeButton.style.borderStyle = ""
    openAddCircleButton.style.borderStyle = ""
    openAddIconButton.style.borderStyle = ""
    openAddImageButton.style.borderStyle = ""
    openAddChartButton.style.borderStyle = ""
    openAddGraphButton.style.borderStyle = ""

    openAddEllipseButton.style.borderStyle = ""
    openAddRectButton.style.borderStyle = ""
    openAddBGimageButton.style.borderStyle = ""
    openAddTextButton.style.borderStyle = ""
    openAddPathButton.style.borderStyle = ""
    openAddSymbolButton.style.borderStyle = ""
    openAddPolygonButton.style.borderStyle = ""
    openAddArcButton.style.borderStyle = ""

    openAddTextureButton.style.borderStyle = ""
    openAddGradientButton.style.borderStyle = ""
    getComponentLibraryButton.style.borderStyle = ""
    getSchematicLibraryButton.style.borderStyle = ""

    enableAllButtons()
    var myDiv = d3.select("#"+name+"FrameDiv")
    myDiv.transition().style("height", 1+"px")
    .on("end", function()
        {
            myDiv.style("visibility", "hidden")
        }
    )
    eval(name+"Viz=false")
    dragDot.removeAttribute("transform")
               dragDot.setAttribute("cx",0)
               dragDot.setAttribute("cy",0)
}

//---Only one frame visable: fired when another  frame is chosen
function closeAllFrames()
{


    hideAllHelps()


    if(svgSaveDiv.style.display=="block")
        showSaveSVG()


         openAddCircleButton.style.borderStyle = ""
         openAddComponentButton.style.borderStyle = ""
         openAddSchematicButton.style.borderStyle = ""
         openAddMoleculeButton.style.borderStyle = ""
         openAddIconButton.style.borderStyle = ""
         openAddImageButton.style.borderStyle = ""
         openAddChartButton.style.borderStyle = ""
         openAddGraphButton.style.borderStyle = ""


   openAddEllipseButton.style.borderStyle = ""
    openAddRectButton.style.borderStyle = ""
    openAddBGimageButton.style.borderStyle = ""
    openAddTextButton.style.borderStyle = ""
    openAddPathButton.style.borderStyle = ""
    openAddSymbolButton.style.borderStyle = ""
    openAddPolygonButton.style.borderStyle = ""
    openAddArcButton.style.borderStyle = ""

    openAddTextureButton.style.borderStyle = ""
    openAddGradientButton.style.borderStyle = ""
    getComponentLibraryButton.style.borderStyle = ""
    getSchematicLibraryButton.style.borderStyle = ""


    for(var k = 0; k<iframeNameArray.length; k++)
    {
        var name = iframeNameArray[k]
        var viz = eval(name+"Viz")
        if(viz==true)
        {
            if(name=="editElemComponent")closeEditComponent()
            if(name=="editElemSchematic")closeEditSchematic()

            else if(name=="addElemText")closeDrawText()
            else if(name=="addElemCircle")closeDrawCircle()
            else if(name=="addElemTexture")closeDrawTexture()

            //---added---
            else if(name=="addElemComponent")closeDrawComponent()
            else if(name=="addElemSchematic")closeDrawSchematic()
            else if(name=="addElemMolecule")closeDrawMolecule()
            else if(name=="addElemTessellate")closeDrawTessellate()


            else if(name=="addElemEllipse")closeDrawEllipse()
            else if(name=="addElemRect")closeDrawRect()
            else if(name=="addElemPath")closeDrawPath()
            else if(name=="addElemSymbol")closeDrawSymbol()
            else if(name=="addElemPolygon")closeDrawPolygon()
            else if(name=="addElemArc")closeDrawArc()


            var myDiv = d3.select("#"+name+"FrameDiv")
            myDiv.style("height", 1+"px")
            myDiv.style("visibility", "hidden")
            myDiv.style("overflow", "hidden")


        }
        eval(name+"Viz=false")
    }

}

var addElemComponentLoad = false
var editElemComponentLoad = false
var addElemSchematicLoad = false
var addElemMoleculeLoad = false
var addElemTessellateLoad = false
var editElemSchematicLoad = false




var addElemCircleLoad = false
var addElemArcLoad = false
var addElemIconLoad = false
var addElemImageLoad = false
var addElemChartLoad = false
var addElemGraphLoad = false
var addElemSymbolLoad = false
var addElemPolygonLoad = false
var addElemTextureLoad = false
var addElemGradientLoad = false
var addElemSymbolEditLoad = false
var addElemEllipseLoad = false
var addElemRectLoad = false
var addElemBGimageLoad = false
var addElemTextLoad = false
var addElemPathLoad = false
var addElemPathEditLoad = false

var addElemCircleViz = false
var addElemArcViz = false

var addElemComponentViz = false
var editElemComponentViz = false
var addElemSchematicViz = false
var addElemMoleculeViz = false
var addElemTessellateViz = false
var editElemSchematicViz = false


var addElemIconViz = false
var addElemImageViz = false
var addElemChartViz = false
var addElemGraphViz = false
var addElemSymbolViz = false
var addElemPolygonViz = false
var addElemTextureViz = false
var addElemGradientViz = false
var addElemSymbolEditViz = false
var addElemEllipseViz = false
var addElemRectViz = false
var addElemBGimageViz = false
var addElemTextViz = false
var addElemPathViz = false
var addElemPathEditViz = false

var addElemCircleCw
var addElemArcCw
var addElemComponentCw
var editElemComponentCw
var addElemSchematicCw
var addElemMoleculeCw
var addElemTessellateCw
var editElemSchematicCw
var addElemIconCw
var addElemImageCw
var addElemChartCw
var addElemGraphCw

var addElemSymbolCw
var addElemPolygonCw
var addElemTextureCw
var addElemGradientCw


var addElemSymbolEditCw
var addElemEllipseCw
var addElemRectCw
var addElemBGimageCw
var addElemTextCw
var addElemPathCw
var addElemPathEditCw

//---each iframe---

var iframeNameArray =[]

iframeNameArray[0] = 'addElemText'

iframeNameArray[1] = 'addElemPath'
iframeNameArray[2] = 'addElemPathEdit'

iframeNameArray[3] = 'addElemCircle'
iframeNameArray[4] = 'addElemEllipse'
iframeNameArray[5] = 'addElemRect'
iframeNameArray[6] = 'addElemSymbol'
iframeNameArray[7] = 'addElemSymbolEdit'

iframeNameArray[8] = 'addElemTexture'
iframeNameArray[9] = 'addElemIcon'
iframeNameArray[10] = 'addElemGradient'
iframeNameArray[11] = 'addElemPolygon'
iframeNameArray[12] = 'addElemComponent'
iframeNameArray[13] = 'editElemComponent'
iframeNameArray[14] = 'addElemSchematic'
iframeNameArray[15] = 'editElemSchematic'
iframeNameArray[16] = 'addElemBGimage'
iframeNameArray[17] = 'addElemArc'
iframeNameArray[18] = 'addElemMolecule'
iframeNameArray[19] = 'addElemTessellate'
iframeNameArray[20] = 'addElemImage'
iframeNameArray[21] = 'addElemChart'
iframeNameArray[22] = 'addElemGraph'


