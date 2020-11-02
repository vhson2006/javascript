import gql from 'graphql-tag';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import security from '../configs/security';

const authenticateService = (req, res, next) => {
  passport.use(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SERECT,
    }, (jwtPayload, done) => {
      done(null, jwtPayload);
    }),
  );
  passport.initialize();
  if (JSON.stringify({}) !== JSON.stringify(req.body)) {
    const obj = gql`{${req.body.query}}`;
    let operation = '';
    let name = '';
    if (typeof obj.definitions[0].selectionSet.selections[0].selectionSet === undefined) {
      operation = obj.definitions[0].name.value;
      name = obj.definitions[0].selectionSet.selections[0].name.value;
    } else {
      operation = obj.definitions[0].selectionSet.selections[0].name.value;
      if (typeof obj.definitions[0].selectionSet.selections[0].selectionSet !== 'undefined') {
        name = obj.definitions[0].selectionSet.selections[0].selectionSet.selections[0].name.value;
      }
    }

    if (security[operation].find((e) => e === name)) {
      next();
    } else {
      passport.authenticate('jwt', { session: false })(req, res, next);
    }
  } else {
    next();
  }
};

export default authenticateService;
