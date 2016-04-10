---
layout: docs
title: # Using XML to Send Data to Flash App
---

# Using XML to Send Data to Flash App {#xml_to_flash}

Many users wonder whether they can use Vae to manage the content of
their Flash-based websites. If you use XML to drive your site's content,
the answer is yes! VaeML can be injected into XML pages just like an
HTML page. Here's an example, non-Vae XML page that is currently storing
data for a Flash site:

    <?xml version="1.0" encoding="UTF-8"?>
     <press version="1" xmlns:ns="http://xspf.org/ns/0/" containerWidth="650" padTop="20" padBottom="40" 
          padLeft="20" padRight="10" padImageTop="10" padImageRight="10" padTextLeft="100"
          fadeInSpeed="4" fadeInType="eaeOutSine" 
          textFadeInSpeed="2" textFadeInType="easeOutSine" delay="1" titleColor="0x000000" 
          dateColor="0x999999" textColor="0x999999" >
     <pressItem id="0" title="Metropolis" date="September 2006" backgroundImage="ideasImages/back0.png" 
     backWidth="600" backHeight="394">
        <![CDATA[Metropolis review....metropolis review...This is my idea- the idea of an idea. 
        Where does my idea begin and how does it <b><i>terminate?</i></b> How many levels of 
        recursion can I take before my mind fuses with my idea? I shouldn't be writing this... I have run out of ideas!] ]>
            <image thumbFile="pressImages/pressThumb0.png" thumbWidth="90" 
            thumbHeight="106" imageFile="pressImages/light0.png" 
            imageWidth="600" imageHeight="681" />
            <image thumbFile="pressImages/pressThumb1.png" thumbWidth="90" 
            thumbHeight="106" imageFile="pressImages/light1.png" 
            imageWidth="500" imageHeight="362"/>
            <image thumbFile="pressImages/pressThumb0.png" thumbWidth="90" 
            thumbHeight="106" imageFile="pressImages/light0.png" 
            imageWidth="600" imageHeight="681"/>
            </pressItem>
        <pressItem id="1" title="Casino News" date="September 2005" 
        backgroundImage="ideasImages/back1.png" backWidth="600" backHeight="404">
            <![CDATA[Casino News review....metropolis review...This is my idea- the idea of an idea. 
            Where does my idea begin and how does it <b><i>terminate?</i></b> How many levels of 
            recursion can I take before my mind fuses with my idea? I shouldn't be writing this... I have run out of ideas!
            ] ]>
        </pressItem>
            <pressItem id="2" title="Bent Not Stirred" date="September 2004" backgroundImage="ideasImages/back2.png" 
            backWidth="600" backHeight="600">
            <image imageFile="pressImages/press0.png" imageWidth="620" imageHeight="450" />
        </pressItem>
        </press>

Here's what our code looks like after injecting some VaeML:

    <?xml version="1.0" encoding="UTF-8"?>
    <press version="1" xmlns:ns="http://xspf.org/ns/0/" containerWidth="650" padTop="20" padBottom="40" 
    padLeft="20" padRight="10" padImageTop="10" padImageRight="10" padTextLeft="100"
    fadeInSpeed="4" fadeInType="eaeOutSine" 
    textFadeInSpeed="2" textFadeInType="easeOutSine" delay="1" titleColor="0x000000" dateColor="0x999999" textColor="0x999999" >

    <v:collection path="press">
        <pressItem id="<v->" title="<v=title>" date="<v=tagline>" backgroundImage="<v=background_image/background_image>"  
        backWidth="<v=background_image/background_width>" backHeight="<v=background_image/background_height>">
        <![CDATA[<v=description>] ]>
        <v:collection path="images">
            <v:if total_items="1">
                    <image imageFile="<v=image,pressSize_single>" />
                <v:else>
                    <image thumbFile="<v=image,pressThumb>" thumbWidth="90" thumbHeight="106" imageFile="<v=image,pressClicked>" 
                    imageWidth="600" imageHeight="681"/>
                </v:else>
            </v:if>
        </v:collection>
        </pressItem>
        </v:collection>
    </press>

Remember, there is no difference betwee how VaeML behaves in an XML
document vs. HTML code.
