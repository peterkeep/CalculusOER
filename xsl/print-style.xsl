<?xml version="1.0"?>
<xsl:stylesheet 
version="1.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="./core/pretext-latex.xsl"/>

<xsl:template match="example" mode="tcb-style">
    <xsl:text>
        colframe=DCgreen, 
        colback=white
    </xsl:text>
</xsl:template>

<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>
        colframe=DCblue,
        colback=white
    </xsl:text>
</xsl:template>

<xsl:template match="theorem" mode="tcb-style">
    <xsl:text>
        colframe=DCblue,
        colback=white
    </xsl:text>
</xsl:template>

<xsl:template match="definition" mode="tcb-style">
    <xsl:text>
        colframe=DCblue,
        colback=white
    </xsl:text>
</xsl:template>

<xsl:template match="note" mode="tcb-style">
    <xsl:text>
        colframe=DCred,
        colback=white
    </xsl:text>
</xsl:template>

<xsl:template match="aside" mode="tcb-style">
    <xsl:text>
        empty,
        frame engine=path,
        sharp corners,
        attach boxed title to top left={yshift*=-\tcboxedtitleheight},
        boxed title style={size=minimal, top=4pt, left=4pt},
        borderline west={2pt}{-3pt}{DCyellow},
        colframe=white,
        colback=white,
        fontupper=\footnotesize
    </xsl:text>
</xsl:template>

<xsl:template match="activity" mode="tcb-style">
    <xsl:text>
        colframe=DClightgreen,
        colback=white,
        coltitle=black
    </xsl:text>
</xsl:template>

<xsl:template match="proof" mode="tcb-style">
    <xsl:text>
        empty,
        frame engine=path,
        colframe=white,
        sharp corners,
        attach boxed title to top left={yshift*=-\tcboxedtitleheight},
        boxed title style={size=minimal, top=4pt, left=4pt},
        coltitle=black, 
        fonttitle=\footnotesize\bfseries,
        borderline west={2pt}{-3pt}{black!10},
        fontupper=\footnotesize
    </xsl:text>
</xsl:template>

</xsl:stylesheet>