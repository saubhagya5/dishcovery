import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Switch, Box, TextField, Avatar } from '@mui/material';
import { styled, ThemeProvider, createTheme} from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#F4D9D0',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
});

const NavButton = styled(Button)(({ theme }) => ({
  color: 'black',
  textTransform: 'lowercase',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
}));

const LogoImage = styled('img')({
  height: '50px',
  cursor: 'pointer',
});

const Logo = styled('div')({
  fontFamily: 'cursive',
  fontSize: '24px',
  color: 'black',
});

const ImageSection = styled(Box)({
  height: '60vh',
  width: '100%',
  backgroundImage: 'url("/src/assets/paneer.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
});

const ContentSection = styled(Box)({
  minHeight: '40vh',
  width: '100%',
  backgroundColor: '#F4D9D0',
  padding: '40px 20px',
  boxSizing: 'border-box',
});

const RecipeSection = styled(Box)({
  backgroundColor: '#F4D9D0',
  padding: '20px',
  margin: '20px 0',
  borderRadius: '8px',
});

const TagButton = styled(Button)({
  backgroundColor: '#921A40',
  color: 'white',
  margin: '0 5px',
  '&:hover': {
    backgroundColor: 'black',
  },
});

const CommentSection = styled(Box)({
  backgroundColor: '#F4D9D0',
  padding: '20px',
  margin: '20px 0',
  borderRadius: '8px',
});

const CommentBox = styled(Box)({
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '20px',
});

const Comment = styled(Box)({
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '8px',
  marginTop: '15px',
  display: 'flex',
  gap: '15px',
});

const SubmitButton = styled(Button)({
  backgroundColor: '#921A40',
  color: 'white',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: 'black',
  },
});

function Search() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Bhavya Bhardwaj',
      content: 'I made this last night and it was absolutely delicious! The gravy was perfectly balanced.',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'Dhriti Parikh',
      content: 'Thanks for sharing! Quick question - can I substitute heavy cream with coconut cream?',
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      author: 'Anushka Jha',
      content: 'This recipe reminds me of my grandmother\'s cooking. So authentic!',
      timestamp: '1 day ago'
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'Guest User',
        content: newComment,
        timestamp: 'Just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <Box>
      <StyledAppBar elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <LogoImage src="/src/assets/Frame 9.png" alt="dishcovery" />
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <NavButton>home</NavButton>
            <NavButton>search</NavButton>
            <NavButton>generate</NavButton>
            <NavButton>write</NavButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      <Box sx={{ paddingTop: '64px' }}>
        <ImageSection>
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
            }}
          >
            <Typography 
              variant="h4" 
              color="black" 
              sx={{ 
                backgroundColor: '#FFFFFF', 
                padding: '30px',
                maxWidth: '300px',
              }}
            >
              SHAHI PANEER
            </Typography>
          </Box>
        </ImageSection>

        <ContentSection>
          <Typography variant="body1" sx={{ 
            maxWidth: '6000px', 
            textAlign: 'center',
            fontSize: '1.5rem',
            lineHeight: '1.8',
            fontWeight: 400,
            padding: '0 20px',
            margin: '0 auto 40px',
            fontStyle: 'italic',
            fontFamily: 'inter',
          }}>
            The ultimate comfort with Shahi Paneer, a royal dish that promises to
            elevate your meal to new heights. Imagine tender, fresh paneer cubes
            soaked in a silky, creamy gravy that's a perfect blend of rich tastes,
            aromatic spices, and a subtle sweetness. Each bite offers a melt-in-your-
            mouth experience, packed with flavors that are both indulgent and soul-
            satisfying.
          </Typography>

          <RecipeSection>
            <Typography variant="h3" gutterBottom>INGREDIENTS</Typography>
            <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-line', fontSize: '20px', fontStyle: 'italic', fontFamily: 'inter', }}>
              {`250g paneer (cut into cubes)
2 tablespoons ghee or oil
1 large onion (finely chopped)
2 tomatoes (pureed)
2 tablespoons cashew nuts (soaked in water for 20 minutes)
1 tablespoon ginger-garlic paste
1/2 cup fresh cream
1/4 cup yogurt (whisked)
1 teaspoon cumin seeds
1/2 teaspoon turmeric powder
1 teaspoon coriander powder
1/2 teaspoon garam masala
1/2 teaspoon red chili powder (adjust to taste)
2-3 green cardamom pods
1 cinnamon stick
2-3 cloves
1 bay leaf
Salt (to taste)
Fresh coriander leaves (for garnish)
A few saffron strands (optional, soaked in warm milk)`}
            </Typography>

            <Typography variant="h3" gutterBottom sx={{ marginTop: '20px' }}>Step-By-Step Process</Typography>
            <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-line', fontSize: '20px', fontStyle: 'italic', fontFamily: 'inter', }}>
              {`Start by soaking 2 tablespoons of cashews for 20 minutes and blending them into a smooth paste. Lightly fry 250g of paneer cubes until golden and set them aside.
In the same pan, heat 2 tablespoons of ghee or oil. Add 1 teaspoon of cumin seeds, 2-3 cardamom pods, 1 cinnamon stick, 2 cloves, and 1 bay leaf. Once they splutter, add 1 chopped onion and sauté until golden. Stir in 1 tablespoon of ginger-garlic paste and cook for 1-2 minutes. Add 2 pureed tomatoes and cook until the oil separates.
Next, add 1/2 teaspoon turmeric, 1 teaspoon coriander powder, 1/2 teaspoon garam masala, 1/2 teaspoon red chili powder, and salt to taste. Mix well, then add the cashew paste and 1/4 cup of whisked yogurt. Stir continuously and cook for a couple of minutes.
Pour in 1/2 cup fresh cream and simmer the gravy for 5 minutes. Add the fried paneer cubes and cook for another 3-4 minutes, allowing the flavors to blend.
Garnish with fresh coriander leaves and a few saffron strands soaked in warm milk (optional). Serve hot with naan, roti, or basmati rice.`}
            </Typography>
          </RecipeSection>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <TagButton>PANEER</TagButton>
            <TagButton>VEGETARIAN</TagButton>
            <TagButton>GRAVY</TagButton>
            <TagButton>MEAL</TagButton>
            <TagButton>INDIAN</TagButton>
          </Box>

          <CommentSection>
            <Typography variant="h3" gutterBottom>Comments</Typography>
            
            <CommentBox>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Share your thoughts or ask a question..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                sx={{ backgroundColor: '#f5f5f5', marginBottom: '10px' }}
              />
              <SubmitButton onClick={handleCommentSubmit}>
                Post Comment
              </SubmitButton>
            </CommentBox>

            {comments.map((comment) => (
              <Comment key={comment.id}>
                <Avatar sx={{ bgcolor: '#921A40' }}>
                  {comment.author[0]}
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {comment.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {comment.timestamp}
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {comment.content}
                  </Typography>
                </Box>
              </Comment>
            ))}
          </CommentSection>
        </ContentSection>
      </Box>
    </Box>
  );
}

export default Search;