import React from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesContainer from "../components/Opportunities/OpportunitiesContainer";
import OpportunityCard from "../components/Opportunities/OpportunityCard";

import "./Opportunities.scss";

// Opportunity Image (Switch to firebase links afterwards)
import image1 from "../assets/images/opportunities/image1.png";

const Opportunities = () => {
  return (
    <div id='opportunities'>
      <Navbar type='gradient' />
      <OpportunitiesContainer>
        <OpportunityCard
          title='Opportunity 1'
          image={image1}
          alt='Image 1'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum congue erat, eu tempus sem pellentesque nec. Vestibulum blandit est purus, eu scelerisque ligula molestie sed. Mauris in magna lacinia, porta mauris eget, sagittis metus. Donec id faucibus erat, at posuere lectus. Nunc et porttitor libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras lacus felis, maximus sed molestie id, imperdiet eget dolor. Phasellus odio neque, posuere vitae urna et, varius congue lacus. Cras porta purus id odio tincidunt imperdiet. Vestibulum in nisl vitae neque elementum hendrerit. Donec sollicitudin id purus eget blandit. Pellentesque varius diam in nisl rhoncus, eu varius dui placerat.'
        />
        <OpportunityCard
          title='Opportunity 2'
          image={image1}
          alt='Image 2'
          description='Curabitur sollicitudin elit ut ex consequat, ac tempor nisl pellentesque. Proin imperdiet, turpis semper dapibus accumsan, odio enim aliquet sapien, sit amet finibus orci elit ut mauris. Integer arcu dui, tincidunt vitae congue nec, porta nec sapien. Vivamus consequat augue et est fringilla elementum. Maecenas lorem ligula, eleifend pretium felis nec, facilisis laoreet est. Sed euismod leo quis ullamcorper placerat. Sed efficitur sem ut est faucibus molestie. Maecenas malesuada dui quis erat cursus condimentum. Praesent ut tempus metus. Curabitur convallis, lacus eget fringilla porta, tellus enim tempor ex, ac tincidunt leo enim sit amet lacus. Suspendisse ut nulla a urna lobortis ornare at laoreet lacus. Etiam porttitor sit amet augue vitae interdum. Fusce in neque et quam tincidunt vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae porttitor elit. Phasellus ligula odio, finibus et quam sed, finibus ultricies dolor.'
        />
        <OpportunityCard
          title='Opportunity 3'
          image={image1}
          alt='Image 3'
          description='Nullam fermentum semper lorem, eget condimentum quam lacinia non. Vivamus fermentum nunc ut feugiat iaculis. Aliquam a ex quam. Mauris nec mollis ligula. Proin urna tortor, bibendum a aliquet non, maximus at nisl. Duis nisl turpis, maximus vitae lectus eget, pulvinar consectetur neque. Praesent id venenatis tortor. Nunc porta felis id nisl volutpat venenatis. Proin sed augue rhoncus, laoreet leo semper, efficitur sem. Nulla cursus pellentesque magna, at ullamcorper neque commodo at.'
        />
        <OpportunityCard
          title='Opportunity 4'
          image={image1}
          alt='Image 4'
          description='Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce varius, felis sit amet molestie consequat, mauris massa pharetra felis, id rhoncus felis ex sit amet eros. Donec tincidunt nisl sit amet nunc pretium vulputate. Integer facilisis lorem est, id viverra sapien tincidunt at. Donec malesuada consectetur magna, a pharetra turpis aliquet id. Suspendisse lacinia magna a elit aliquam aliquet. Ut sit amet elementum arcu. Praesent non odio convallis, sollicitudin tortor a, dignissim lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam at sodales libero. In tincidunt tincidunt mi ut pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur elementum ante ut nulla egestas, quis tincidunt leo euismod.'
        />
      </OpportunitiesContainer>
    </div>
  );
};

export default Opportunities;
