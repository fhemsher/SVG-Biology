
var SVGx
var SVGy

function startCursorLoc()
{
 
    MySVG.on("mousemove", function()
        {
         SVGx = d3.mouse(this)[0]
        SVGy = d3.mouse(this)[1]


                if(addElemCircleViz==true)trackDrawCircle()
                if(addElemArcViz==true)trackDrawArc()
                if(addElemEllipseViz==true)trackDrawEllipse()
                if(addElemRectViz==true)trackDrawRect()
                if(addElemBGimageViz==true)trackDrawBGimage()
                if(DrawTextStarted==true)trackDrawText()
                if(DrawPath==true||DrawPathStart==true)trackDrawPath()
                if(DrawPathEdit==true)trackDrawPathEdit()
                if(addElemPgonViz==true)trackDrawPgon()

                if(addElemIconViz==true)trackDrawIcon()
                if(addElemPolygonViz==true)trackDrawPolygon()
                if(addElemComponentViz==true)trackDrawComponent()
                if(addElemSchematicViz==true)trackDrawSchematic()
                if(addElemMoleculeViz==true)trackDrawMolecule()
                if(addElemTessellateViz==true)trackDrawTessellate()
                if(addElemImageViz==true)trackDrawImage()
                if(addElemGraphViz==true)trackDrawGraph()
                if(addElemChartViz==true)trackDrawChart()
               if(ZoomDrawing==true)trackZoom()
              //---tessellate if(TrimBox==true)trackDrawTrimBox()

        }
    );

}


